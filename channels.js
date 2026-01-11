// ==================== CHANNELS DATABASE ====================
const channels = [
  {
    id: "btv",
    name: "BTV",
    category: "Bangladeshi",
    logo: "https://ssl.com.bd/sites/default/files/BTV%20Logo%20Gallery.png",
    streams: [{ label: "Main", url: "http://103.199.161.254/Content/b4umusic/Live/Channel(B4Umusic)/Stream(01)/index.m3u8" }]
  },
  {
    id: "somoy-tv",
    name: "Somoy TV",
    category: "Bangladeshi",
    logo: "https://dl.dropbox.com/s/leielj83em5kg7h/somoy_news.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8" }]
  },
  {
    id: "ekattor-tv",
    name: "Ekattor TV",
    category: "Bangladeshi",
    logo: "https://s4.gifyu.com/images/imagea02f4314e761661d.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8" }]
  },
  {
    id: "channel-24",
    name: "Channel 24",
    category: "Bangladeshi",
    logo: "https://dl.dropbox.com/s/puf12xv5flgbnz5/channel24_bd.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" }]
  },
  {
    id: "independent-tv",
    name: "Independent TV",
    category: "Bangladeshi",
    logo: "https://dl.dropbox.com/s/7xwwb8hetz3w8rp/independent_tv.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8" }]
  },
  {
    id: "jamuna-tv",
    name: "Jamuna TV",
    category: "Bangladeshi",
    logo: "https://dl.dropbox.com/s/k7z1dsec1jfjbkn/jamuna_tv_bd.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8" }]
  },
  {
    id: "atn-news",
    name: "ATN News",
    category: "Bangladeshi",
    logo: "https://dl.dropbox.com/s/4ldi1dp09s8o6bm/atn_news_bd.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8" }]
  },
  {
    id: "atn-bangla",
    name: "ATN Bangla",
    category: "Bangladeshi",
    logo: "https://s6.gifyu.com/images/image27cfa7002786c232.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8" }]
  },
  {
    id: "ntv",
    name: "NTV",
    category: "Bangladeshi",
    logo: "https://www.ntvbd.com/sites/default/files/aggregator/2020/02/17/ntv-channel_0.jpg",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8" }]
  },
  {
    id: "banglavision",
    name: "BanglaVision",
    category: "Bangladeshi",
    logo: "https://s4.gifyu.com/images/image5c0bfa6b281be803.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8" }]
  },
  {
    id: "ekushey-tv",
    name: "Ekushey TV",
    category: "Bangladeshi",
    logo: "https://s4.gifyu.com/images/image534fa27d7683f33d.png",
    streams: [{ label: "Main", url: "http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8" }]
  },
  {
    id: "channel-i",
    name: "Channel I",
    category: "Bangladeshi",
    logo: "https://cdn.tvpassport.com/image/station/240x135/channel-i-bangla.png",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8" }]
  },
  {
    id: "deepto-tv",
    name: "Deepto TV",
    category: "Bangladeshi",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Deepto_TV_logo.png",
    streams: [{ label: "Main", url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8" }]
  },
  {
    id: "maasranga-hd",
    name: "MAASRANGA HD",
    category: "Bangladeshi",
    logo: "https://static.wikia.nocookie.net/etv-gspn-bangla/images/a/a3/Maasranga_TV_HD_logo.png",
    streams: [{ label: "Main", url: "http://mtv.sunplex.live/MAASRANGA-TV/index.m3u8" }]
  },
  {
    id: "deshi-tv-hd",
    name: "Deshi TV HD",
    category: "Bangladeshi",
    logo: "https://i.postimg.cc/t4cxjxRj/Deshi-TV.jpg",
    streams: [{ label: "Main", url: "https://deshitv.deshitv24.net/live/myStream/playlist.m3u8" }]
  },
  {
    id: "atn-bangla-uk",
    name: "ATN Bangla UK",
    category: "Bangladeshi",
    logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ATN%20Bangla.png",
    streams: [{ label: "Main", url: "https://app.ncare.live/live-orgin/atnbanglauk-off.stream/playlist.m3u8" }]
  },
  {
    id: "gazi-tv",
    name: "Gazi TV",
    category: "Bangladeshi",
    logo: "https://i.imgur.com/6sDqVQr.png",
    streams: [{ label: "Main", url: "http://itpolly.iptv.digijadoo.net/live/gazi_tv/chunks.m3u8" }]
  },
  {
    id: "star-jalsha",
    name: "Star Jalsha",
    category: "Indian",
    logo: "https://static.wikia.nocookie.net/logopedia/images/3/3c/Star_Jalsha_HD.png",
    streams: [{ label: "Main", url: "https://catchup.yuppcdn.net/amazonv2/36/preview/starjalsha/master/chunklist.m3u8" }]
  },
  {
    id: "enter10-bangla",
    name: "Enter10 Bangla",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Enterr10_Bangla.jpeg/200px-Enterr10_Bangla.jpeg",
    streams: [{ label: "Main", url: "https://amg01448-samsungin-enterr10bangla-samsungin-ad-gg.amagi.tv/playlist/amg01448-samsungin-enterr10bangla-samsungin/playlist.m3u8" }]
  },
  {
    id: "news18-bangla",
    name: "News18 Bangla",
    category: "Indian",
    logo: "https://jio.dinesh29.com.np/smart/ardinesh/logos/news18-bangla-news.png",
    streams: [{ label: "Main", url: "https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8" }]
  },
  {
    id: "tv9-bangla",
    name: "TV9 Bangla",
    category: "Indian",
    logo: "https://jio.dinesh29.com.np/smart/ardinesh/logos/tv9-bangla.png",
    streams: [{ label: "Main", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/tv9-bangla/main.m3u8" }]
  },
  {
    id: "dd-bangla",
    name: "DD Bangla",
    category: "Indian",
    logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Dd%20Bangla.png",
    streams: [{ label: "Main", url: "https://d3eyhgoylams0m.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/ed7bd2c7-8d10-4051-b397-2f6b90f99acb/2e9e32a4-c4f7-49c3-96d6-c4e3660c7e3f/2.m3u8" }]
  },
  {
    id: "abp-ananda",
    name: "ABP Ananda",
    category: "Indian",
    logo: "https://static.wikia.nocookie.net/logopedia/images/0/09/ABP_Ananda_logo_2021.png",
    streams: [{ label: "Main", url: "https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8" }]
  },
  {
    id: "zee-tv",
    name: "ZEE TV",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Zee_TV_logo.svg",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/zee_tv/chunks.m3u8" }]
  },
  {
    id: "zee-cinema",
    name: "ZEE Cinema",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/90/Zee_Cinema_logo.png",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/zee_cinema/chunks.m3u8" }]
  },
  {
    id: "zee-bollywood",
    name: "ZEE Bollywood",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Zee_Bollywood_logo.png",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/zee_classic/chunks.m3u8" }]
  },
  {
    id: "star-plus-hd",
    name: "STAR PLUS HD",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Plus_HD_logo.svg/1280px-Star_Plus_HD_logo.svg.png",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/star_plus_hd/chunks.m3u8" }]
  },
  {
    id: "star-plus-sd",
    name: "STAR PLUS SD",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Plus_HD_logo.svg/1280px-Star_Plus_HD_logo.svg.png",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/star_plus/chunks.m3u8" }]
  },
  {
    id: "star-gold",
    name: "STAR GOLD",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Star_Gold_logo.png",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/star_gold/chunks.m3u8" }]
  },
  {
    id: "colors-hd",
    name: "Colors HD",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Colors_TV_logo.png",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/colors_hd/chunks.m3u8" }]
  },
  {
    id: "bollywood-hd",
    name: "Bollywood HD",
    category: "Indian",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zee_Bollywood_logo.png/320px-Zee_Bollywood_logo.png",
    streams: [{ label: "Main", url: "http://telekomtv-ro.akamaized.net/shls/LIVE$BollywoodHD/247.m3u8/Level(3670016)?start=LIVE&end=END" }]
  },
  {
    id: "atn-music",
    name: "ATN Music",
    category: "Music",
    logo: "https://i.ytimg.com/vi/ZKFyzan2-xo/maxresdefault_live.jpg",
    streams: [{ label: "Main", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1717/output/index.m3u8" }]
  },
  {
    id: "atn-music-premium",
    name: "ATN Music Premium",
    category: "Music",
    logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ATN%20Music.png",
    streams: [{ label: "Main", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8" }]
  },
  {
    id: "duronto-tv",
    name: "Duronto TV",
    category: "Kids",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Duronto_TV_Logo.png",
    streams: [{ label: "Main", url: "https://tvsen4.aynaott.com/durontotv/index.m3u8" }]
  },
  {
    id: "kids-creation",
    name: "Kids Creation",
    category: "Kids",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Duronto_TV_Logo.png",
    streams: [{ label: "Main", url: "http://foxkids-online.ru/hls/test_240p264kbs/index.m3u8" }]
  },
  {
    id: "discovery",
    name: "Discovery",
    category: "Documentary",
    logo: "https://bdiptv.stream/uploads/tv_image/discovery.png",
    streams: [{ label: "Main", url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoverychannel2/default/manifest.mpd" }]
  },
  {
    id: "love-nature",
    name: "Love Nature",
    category: "Documentary",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Love_Nature_TV.png",
    streams: [{ label: "Main", url: "https://cdn1.logichost.in/ajmantv/live/playlist.m3u8" }]
  },
  {
    id: "animal-planet",
    name: "Animal Planet HD",
    category: "Documentary",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Animal_Planet_logo.svg/1280px-Animal_Planet_logo.svg.png",
    streams: [{ label: "Main", url: "https://tiger-hub.vercel.app@vodzong.mjunoon.tv:8087/streamtest/Animal-Planet-158-3/playlist.m3u8" }]
  },
  {
    id: "natgeo-wild",
    name: "NatGeo Wild",
    category: "Documentary",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Nat-geo-wild-logo.svg/1280px-Nat-geo-wild-logo.svg.png",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/nat_geo_wild/chunks.m3u8" }]
  },
  {
    id: "natgeo-people",
    name: "NatGeo People",
    category: "Documentary",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Nat_Geo_People_logo.png",
    streams: [{ label: "Main", url: "https://itpolly.iptv.digijadoo.net/live/nat_geo_people/chunks.m3u8" }]
  },
  {
    id: "saudi-quran",
    name: "Saudi Quran",
    category: "Islamic",
    logo: "https://yt3.ggpht.com/ytc/AMLnZu_Gxy8ywjMY6_YPX-1uYtUGA56FOfDoBsH62-ekNA=s900-c-k-c0x00ffffff-no-rj",
    streams: [{ label: "Main", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8" }]
  },
  {
    id: "madina-live",
    name: "Madina Live",
    category: "Islamic",
    logo: "https://images-na.ssl-images-amazon.com/images/I/71CywdrFaZL.png",
    streams: [{ label: "Main", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_sunnah/hls_roku/index.m3u8" }]
  },
  {
    id: "t-sports",
    name: "T Sports",
    category: "Sports",
    logo: "https://i.postimg.cc/t4cxjxRj/Deshi-TV.jpg",
    streams: [{ label: "Main", url: "https://padmaonline.duckdns.org:8088/T-Sport/tracks-v1a1/mono.m3u8" }]
  },
  {
    id: "d-sports",
    name: "D Sports",
    category: "Sports",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/DSports_India_logo.svg/800px-DSports_India_logo.svg.png",
    streams: [{ label: "Main", url: "http://jiocgehub.jio.ril.com/Dsports_HD/Dsports_HD_800.m3u8" }]
  }
];
