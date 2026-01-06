// ==================== GLOBAL STATE ====================
let currentChannel = null;
let currentStream = null;
let hls = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  populateAllGrids();
  populateScrollContainers();
});

// ==================== POPULATE FUNCTIONS ====================
function populateScrollContainers() {
  const categoryMap = {
    'bangladeshiContainer': 'Bangladeshi',
    'indianContainer': 'Indian',
    'musicContainer': 'Music',
    'kidsContainer': 'Kids'
  };
  Object.entries(categoryMap).forEach(([containerId, category]) => {
    const container = document.getElementById(containerId);
    const categoryChannels = channels.filter(ch => ch.category === category).slice(0, 6);
    container.innerHTML = categoryChannels.map(ch => createCardHTML(ch)).join('');
  });
}

function populateAllGrids() {
  const grids = {
    'bangladeshiGrid': 'Bangladeshi',
    'indianGrid': 'Indian',
    'musicGrid': 'Music',
    'kidsGrid': 'Kids',
    'docsGrid': 'Documentary',
    'islamicGrid': 'Islamic',
    'sportsGrid': 'Sports'
  };
  Object.entries(grids).forEach(([gridId, category]) => {
    const grid = document.getElementById(gridId);
    const categoryChannels = channels.filter(ch => ch.category === category);
    grid.innerHTML = categoryChannels.map(ch => createCardHTML(ch)).join('');
  });
}

function createCardHTML(channel) {
  return `
    <div class="card" onclick="playChannel(${JSON.stringify(channel).replace(/"/g, '&quot;')})">
      <div class="card-image">
        <img src="${channel.logo}" alt="${channel.name}" onerror="this.style.display='none'">
        <div class="card-play-overlay">
          <div class="play-icon">▶</div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${channel.name}</div>
        <div class="card-meta">
          <span class="card-badge">${channel.category}</span>
        </div>
      </div>
    </div>
  `;
}

// ==================== NAVIGATION ====================
function switchTab(tab) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
  const targetSection = document.getElementById(tab);
  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo(0, 0);
  }
}

function goHome() {
  closePlayer();
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.nav-item')[0].classList.add('active');
  document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
  document.getElementById('home').classList.add('active');
  window.scrollTo(0, 0);
}

// ==================== PLAYER FUNCTIONS ====================
function playChannel(channel) {
  currentChannel = channel;
  currentStream = channel.streams[0];
  document.getElementById('playerTitle').textContent = channel.name;
  document.getElementById('playerSubtitle').textContent = `${channel.category}`;
  const streamSelector = document.getElementById('streamSelector');
  streamSelector.innerHTML = channel.streams.map((s, i) =>
    `<option value="${i}">${s.label}</option>`
  ).join('');
  streamSelector.value = '0';
  loadStream(currentStream.url);
  document.getElementById('playerModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeStream(index) {
  if (!currentChannel) return;
  currentStream = currentChannel.streams[parseInt(index)];
  loadStream(currentStream.url);
}

function loadStream(url) {
  const video = document.getElementById('hlsVideo');
  if (hls) {
    hls.destroy();
    hls = null;
  }
  video.src = '';
  if (Hls.isSupported()) {
    hls = new Hls({
      debug: false,
      enableWorker: true,
      lowLatencyMode: true,
      maxLoadingDelay: 4,
      minAutoBitrate: 0,
      startLevel: undefined
    });
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch(err => console.log('Autoplay prevented:', err));
    });
    hls.on(Hls.Events.ERROR, (event, data) => {
      if (data.fatal) {
        console.error('Fatal HLS error:', data);
        showStreamError('Stream unavailable. Try another source.');
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = url;
          video.play().catch(err => console.log('Playback error:', err));
        }
      }
    });
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
    video.play().catch(err => console.log('Playback error:', err));
  }
  else {
    showStreamError('HLS not supported. Try another browser.');
  }
}

function closePlayer() {
  const modal = document.getElementById('playerModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  if (hls) {
    hls.destroy();
    hls = null;
  }
  const video = document.getElementById('hlsVideo');
  video.pause();
  video.src = '';
}

function showStreamError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.cssText = 'background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.4); color: #ef4444; padding: 16px; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px;';
  errorDiv.innerHTML = `<span>⚠️</span><span>${message}</span>`;
  const controls = document.querySelector('.player-controls');
  if (controls) {
    controls.parentElement.insertBefore(errorDiv, controls);
    setTimeout(() => errorDiv.remove(), 5000);
  }
}

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('playerModal');
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closePlayer();
  }
  if (e.key === 'h' || e.key === 'H') {
    goHome();
  }
});

// ==================== FULLSCREEN ====================
document.getElementById('hlsVideo').addEventListener('fullscreenchange', () => {
  console.log('Fullscreen:', document.fullscreenElement ? 'active' : 'inactive');
});
