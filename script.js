// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('ZeroStream initializing...');
    
    // DOM Elements
    const channelsGrid = document.getElementById('channelsGrid');
    const moviesGrid = document.getElementById('moviesGrid');
    const channelsSection = document.getElementById('channelsSection');
    const moviesSection = document.getElementById('moviesSection');
    const sectionTitle = document.getElementById('sectionTitle');
    const channelCount = document.getElementById('channelCount');
    const noResults = document.getElementById('noResults');
    const emptyMovies = document.getElementById('emptyMovies');
    const searchBtn = document.getElementById('searchBtn');
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    const closeSearch = document.getElementById('closeSearch');
    const playerModal = document.getElementById('playerModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const playerTitle = document.getElementById('playerTitle');
    const playerGenre = document.getElementById('playerGenre');
    const closePlayer = document.getElementById('closePlayer');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const navButtons = document.querySelectorAll('.nav-btn');
    const customVideoBtn = document.getElementById('customVideoBtn');
    const addMovieBtn = document.getElementById('addMovieBtn');
    const customVideoModal = document.getElementById('customVideoModal');
    const closeCustom = document.getElementById('closeCustom');
    const customVideoUrl = document.getElementById('customVideoUrl');
    const customVideoTitle = document.getElementById('customVideoTitle');
    const customVideoPoster = document.getElementById('customVideoPoster');
    const playCustomVideo = document.getElementById('playCustomVideo');
    const saveCustomVideo = document.getElementById('saveCustomVideo');

    console.log('All elements loaded:', {
        channelsGrid: !!channelsGrid,
        customVideoBtn: !!customVideoBtn,
        navButtons: navButtons.length
    });

    // State
    let currentCategory = 'all';
    let currentSection = 'channels';
    let currentSearchQuery = '';
    let filteredChannels = [...channels];
    let movies = [];
    let hls = null;
    let loadingTimeout = null;

    // Load movies from localStorage
    try {
        const savedMovies = localStorage.getItem('zerostream_movies');
        if (savedMovies) {
            movies = JSON.parse(savedMovies);
        }
    } catch (e) {
        console.error('Error loading movies:', e);
        movies = [];
    }

    // Category mapping
    const categoryMap = {
        'all': ['Bangladeshi', 'Indian', 'Sports', 'Kids', 'Music', 'Documentary', 'Islamic'],
        'entertainment': ['Bangladeshi', 'Indian'],
        'sports': ['Sports'],
        'news': ['Bangladeshi', 'Indian'],
        'kids': ['Kids']
    };

    // Display channels
    function displayChannels(channelsToDisplay) {
        if (!channelsGrid) return;
        
        channelsGrid.innerHTML = '';
        
        if (channelsToDisplay.length === 0) {
            noResults.style.display = 'block';
            channelsGrid.style.display = 'none';
            return;
        }
        
        noResults.style.display = 'none';
        channelsGrid.style.display = 'grid';
        
        channelsToDisplay.forEach(channel => {
            const card = createChannelCard(channel);
            channelsGrid.appendChild(card);
        });
    }

    // Display movies
    function displayMovies() {
        if (!moviesGrid) return;
        
        moviesGrid.innerHTML = '';
        
        if (movies.length === 0) {
            emptyMovies.style.display = 'block';
            moviesGrid.style.display = 'none';
            return;
        }
        
        emptyMovies.style.display = 'none';
        moviesGrid.style.display = 'grid';
        
        movies.forEach((movie, index) => {
            const card = createMovieCard(movie, index);
            moviesGrid.appendChild(card);
        });
    }

    // Create channel card
    function createChannelCard(channel) {
        const card = document.createElement('div');
        card.className = 'channel-card';
        
        const categoryColors = {
            'Bangladeshi': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'Indian': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'Sports': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'Kids': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'Music': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'Documentary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'Islamic': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        };
        
        const words = channel.name.split(' ');
        let icon = words.length >= 2 ? 
            words[0].substring(0, 1) + words[1].substring(0, 1) : 
            channel.name.substring(0, 2);
        icon = icon.toUpperCase();
        
        const gradient = categoryColors[channel.category] || categoryColors['Bangladeshi'];
        
        card.innerHTML = `
            <div class="channel-thumbnail" style="background: ${gradient}">
                ${channel.logo ? 
                    `<img src="${channel.logo}" alt="${channel.name}" style="width: 80%; height: 80%; object-fit: contain; position: relative; z-index: 1;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                     <span class="channel-icon" style="display: none;">${icon}</span>` :
                    `<span class="channel-icon">${icon}</span>`
                }
                <div class="play-overlay">
                    <div class="play-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="channel-info">
                <h3 class="channel-name">${channel.name}</h3>
                <div class="channel-meta">
                    <span class="channel-genre">${channel.category}</span>
                    <span class="channel-status">● LIVE</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            openPlayer(channel);
        });
        
        return card;
    }

    // Create movie card
    function createMovieCard(movie, index) {
        const card = document.createElement('div');
        card.className = 'channel-card';
        
        const movieIcon = movie.title.substring(0, 2).toUpperCase();
        
        card.innerHTML = `
            <div class="channel-thumbnail" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
                ${movie.poster ? 
                    `<img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover; position: relative; z-index: 1;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                     <span class="channel-icon" style="display: none;">${movieIcon}</span>` :
                    `<span class="channel-icon">${movieIcon}</span>`
                }
                <div class="play-overlay">
                    <div class="play-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="channel-info">
                <h3 class="channel-name">${movie.title}</h3>
                <div class="channel-meta">
                    <span class="channel-genre">Movie</span>
                    <button class="delete-movie-btn" style="background: rgba(229, 9, 20, 0.2); color: #e50914; border: none; padding: 4px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; font-weight: 600;">Delete</button>
                </div>
            </div>
        `;
        
        const deleteBtn = card.querySelector('.delete-movie-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteMovie(index);
        });
        
        card.addEventListener('click', () => {
            openPlayer({
                name: movie.title,
                category: 'Movie',
                streams: [{url: movie.url}]
            });
        });
        
        return card;
    }

    // Delete movie
    function deleteMovie(index) {
        if (confirm('Delete this movie?')) {
            movies.splice(index, 1);
            localStorage.setItem('zerostream_movies', JSON.stringify(movies));
            displayMovies();
        }
    }

    // Filter channels
    function filterChannels() {
        const categories = categoryMap[currentCategory] || [];
        
        filteredChannels = channels.filter(channel => {
            const matchesCategory = currentCategory === 'all' || categories.includes(channel.category);
            const matchesSearch = channel.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                                 channel.category.toLowerCase().includes(currentSearchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        
        displayChannels(filteredChannels);
        updateChannelCount();
    }

    // Update channel count
    function updateChannelCount() {
        const count = filteredChannels.length;
        channelCount.textContent = `${count} channel${count !== 1 ? 's' : ''}`;
    }

    // Update section title
    function updateSectionTitle(category) {
        const titles = {
            all: 'All Channels',
            entertainment: 'Entertainment Channels',
            sports: 'Sports Channels',
            news: 'News Channels',
            kids: 'Kids Channels'
        };
        sectionTitle.textContent = titles[category] || 'All Channels';
    }

    // Open video player
    function openPlayer(source) {
        console.log('Opening player for:', source);
        loadingOverlay.classList.add('active');
        
        // Clear any existing timeout
        if (loadingTimeout) {
            clearTimeout(loadingTimeout);
        }
        
        // Set 15 second timeout
        loadingTimeout = setTimeout(() => {
            if (loadingOverlay.classList.contains('active')) {
                loadingOverlay.classList.remove('active');
                alert('Connection timeout. The stream may be offline or unreachable.');
            }
        }, 15000);
        
        let streamUrl, title, category;
        
        if (typeof source === 'string') {
            streamUrl = source;
            title = customVideoTitle.value || 'Custom Video';
            category = 'Custom';
        } else {
            streamUrl = source.streams && source.streams.length > 0 ? source.streams[0].url : '';
            title = source.name;
            category = source.category;
        }
        
        playerTitle.textContent = title;
        playerGenre.textContent = category;
        
        if (!streamUrl) {
            clearTimeout(loadingTimeout);
            alert('No stream available');
            loadingOverlay.classList.remove('active');
            return;
        }
        
        // Clean up previous HLS
        if (hls) {
            hls.destroy();
            hls = null;
        }
        
        const urlLower = streamUrl.toLowerCase();
        const isHLS = urlLower.includes('.m3u8');
        
        if (isHLS) {
            if (typeof Hls !== 'undefined' && Hls.isSupported()) {
                hls = new Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90
                });
                
                hls.loadSource(streamUrl);
                hls.attachMedia(videoPlayer);
                
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    clearTimeout(loadingTimeout);
                    loadingOverlay.classList.remove('active');
                    playerModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    
                    videoPlayer.play().catch(err => {
                        console.log('Autoplay prevented:', err);
                    });
                });
                
                hls.on(Hls.Events.ERROR, (event, data) => {
                    if (data.fatal) {
                        clearTimeout(loadingTimeout);
                        console.error('HLS Error:', data);
                        loadingOverlay.classList.remove('active');
                        
                        switch(data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                alert('Network error: Unable to load stream.');
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                hls.recoverMediaError();
                                break;
                            default:
                                alert('Unable to load stream.');
                                closePlayerModal();
                                break;
                        }
                    }
                });
            } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
                videoPlayer.src = streamUrl;
                
                videoPlayer.addEventListener('loadeddata', () => {
                    clearTimeout(loadingTimeout);
                    loadingOverlay.classList.remove('active');
                    playerModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    videoPlayer.play().catch(err => console.log('Autoplay prevented:', err));
                }, {once: true});
            } else {
                clearTimeout(loadingTimeout);
                loadingOverlay.classList.remove('active');
                alert('Your browser does not support HLS streaming.');
                return;
            }
        } else {
            videoPlayer.src = streamUrl;
            
            videoPlayer.addEventListener('loadeddata', () => {
                clearTimeout(loadingTimeout);
                loadingOverlay.classList.remove('active');
                playerModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                videoPlayer.play().catch(err => console.log('Autoplay prevented:', err));
            }, {once: true});
        }
        
        videoPlayer.onerror = () => {
            if (!hls) {
                clearTimeout(loadingTimeout);
                loadingOverlay.classList.remove('active');
                alert('Unable to load video. Check the URL and your connection.');
                closePlayerModal();
            }
        };
    }

    // Close player modal
    function closePlayerModal() {
        if (loadingTimeout) {
            clearTimeout(loadingTimeout);
        }
        playerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        videoPlayer.pause();
        videoPlayer.src = '';
        
        if (hls) {
            hls.destroy();
            hls = null;
        }
    }

    // Reset custom form
    function resetCustomForm() {
        customVideoUrl.value = '';
        customVideoTitle.value = '';
        customVideoPoster.value = '';
    }

    // Show custom modal
    function showCustomModal() {
        console.log('Showing custom modal');
        customVideoModal.classList.add('active');
        customVideoTitle.focus();
    }

    // Hide custom modal
    function hideCustomModal() {
        customVideoModal.classList.remove('active');
        resetCustomForm();
    }

    // === EVENT LISTENERS ===
    
    // Navigation buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Nav button clicked:', this.dataset);
            
            navButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const section = this.dataset.section;
            const genre = this.dataset.genre;
            
            console.log('Switching to section:', section, 'genre:', genre);
            
            if (section === 'movies') {
                channelsSection.style.display = 'none';
                moviesSection.style.display = 'block';
                currentSection = 'movies';
            } else {
                channelsSection.style.display = 'block';
                moviesSection.style.display = 'none';
                currentSection = 'channels';
                currentCategory = genre;
                updateSectionTitle(genre);
                filterChannels();
            }
        });
    });
    
    // Search functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            console.log('Search button clicked');
            searchBar.classList.add('active');
            searchInput.focus();
        });
    }
    
    if (closeSearch) {
        closeSearch.addEventListener('click', () => {
            searchBar.classList.remove('active');
            searchInput.value = '';
            currentSearchQuery = '';
            filterChannels();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            filterChannels();
        });
    }
    
    // Player controls
    if (closePlayer) {
        closePlayer.addEventListener('click', closePlayerModal);
    }
    
    if (playerModal) {
        playerModal.addEventListener('click', (e) => {
            if (e.target === playerModal) {
                closePlayerModal();
            }
        });
    }
    
    // Custom video buttons
    if (customVideoBtn) {
        customVideoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Custom video button clicked!');
            showCustomModal();
        });
    }
    
    if (addMovieBtn) {
        addMovieBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Add movie button clicked!');
            showCustomModal();
        });
    }
    
    if (closeCustom) {
        closeCustom.addEventListener('click', hideCustomModal);
    }
    
    if (customVideoModal) {
        customVideoModal.addEventListener('click', (e) => {
            if (e.target === customVideoModal) {
                hideCustomModal();
            }
        });
    }
    
    // Play custom video
    if (playCustomVideo) {
        playCustomVideo.addEventListener('click', function() {
            console.log('Play custom video clicked');
            const url = customVideoUrl.value.trim();
            const title = customVideoTitle.value.trim();
            
            if (!title) {
                alert('Please enter a title');
                customVideoTitle.focus();
                return;
            }
            
            if (!url) {
                alert('Please enter a video URL');
                customVideoUrl.focus();
                return;
            }
            
            try {
                new URL(url);
            } catch (e) {
                alert('Invalid URL format');
                return;
            }
            
            hideCustomModal();
            openPlayer(url);
        });
    }
    
    // Save custom video
    if (saveCustomVideo) {
        saveCustomVideo.addEventListener('click', function() {
            console.log('Save custom video clicked');
            const url = customVideoUrl.value.trim();
            const title = customVideoTitle.value.trim();
            const poster = customVideoPoster.value.trim();
            
            if (!title) {
                alert('Please enter a title');
                customVideoTitle.focus();
                return;
            }
            
            if (!url) {
                alert('Please enter a video URL');
                customVideoUrl.focus();
                return;
            }
            
            try {
                new URL(url);
            } catch (e) {
                alert('Invalid URL format');
                return;
            }
            
            const movie = {
                title: title,
                url: url,
                poster: poster || null
            };
            
            movies.push(movie);
            localStorage.setItem('zerostream_movies', JSON.stringify(movies));
            
            hideCustomModal();
            
            // Switch to movies section
            navButtons.forEach(b => b.classList.remove('active'));
            const moviesBtn = document.querySelector('[data-section="movies"]');
            if (moviesBtn) {
                moviesBtn.classList.add('active');
                channelsSection.style.display = 'none';
                moviesSection.style.display = 'block';
            }
            
            displayMovies();
            alert('Movie added successfully!');
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchBar && searchBar.classList.contains('active')) {
                searchBar.classList.remove('active');
                searchInput.value = '';
                currentSearchQuery = '';
                filterChannels();
            }
            if (playerModal && playerModal.classList.contains('active')) {
                closePlayerModal();
            }
            if (customVideoModal && customVideoModal.classList.contains('active')) {
                hideCustomModal();
            }
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        }
    });
    
    // Initialize display
    displayChannels(channels);
    displayMovies();
    updateChannelCount();
    
    console.log('ZeroStream initialized successfully!');
    
    // Export to window
    window.ZeroStream = {
        channels,
        movies,
        displayChannels,
        displayMovies,
        filterChannels,
        openPlayer,
        deleteMovie
    };
});
