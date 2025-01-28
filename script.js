// Sample video data
const videos = [
    {
        id: 1,
        thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80',
        channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&fit=crop&crop=faces',
        duration: '10:15',
        title: 'Building a Modern Web Application',
        channel: 'Tech Phantom',
        views: '125K views',
        timestamp: '2 days ago'
    },
    {
        id: 2,
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
        channelAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=faces',
        duration: '15:30',
        title: 'Complete JavaScript Tutorial 2024',
        channel: 'Code Masters',
        views: '89K views',
        timestamp: '5 days ago'
    },
    {
        id: 3,
        thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
        channelAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=48&h=48&fit=crop&crop=faces',
        duration: '8:45',
        title: 'The Future of AI Development',
        channel: 'Future Tech',
        views: '230K views',
        timestamp: '1 week ago'
    },
    {
        id: 4,
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        channelAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=48&h=48&fit=crop&crop=faces',
        duration: '12:20',
        title: 'Learn Web Development in 2024',
        channel: 'Dev Insights',
        views: '45K views',
        timestamp: '3 days ago'
    },
    {
        id: 5,
        thumbnail: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80',
        channelAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=48&h=48&fit=crop&crop=faces',
        duration: '20:10',
        title: 'Machine Learning Fundamentals',
        channel: 'AI Academy',
        views: '180K views',
        timestamp: '1 month ago'
    },
    {
        id: 6,
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
        channelAvatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=48&h=48&fit=crop&crop=faces',
        duration: '5:30',
        title: 'Quick Tips for Better Coding',
        channel: 'Code Tips',
        views: '67K views',
        timestamp: '4 days ago'
    }
];

// Function to create video elements
function createVideoElement(video) {
    return `
        <div class="video-item">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <div class="channel-thumbnail">
                    <img src="${video.channelAvatar}" alt="${video.channel}">
                </div>
                <div class="video-details">
                    <h3 class="video-title">${video.title}</h3>
                    <div class="video-channel">${video.channel}</div>
                    <div class="video-stats">
                        <span>${video.views}</span>
                        <span>•</span>
                        <span>${video.timestamp}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render videos
function renderVideos(videosToRender = videos) {
    const videoGrid = document.querySelector('.video-grid');
    videoGrid.innerHTML = videosToRender.map(video => createVideoElement(video)).join('');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Render initial videos
    renderVideos();

    // Menu toggle functionality
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        sidebar.classList.toggle('active');
        content.classList.toggle('expanded');
    });

    // Mobile search functionality
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    const mobileSearch = document.querySelector('.mobile-search');
    const mobileSearchBack = document.querySelector('.mobile-search-back');

    mobileSearchBtn.addEventListener('click', () => {
        mobileSearch.classList.add('active');
        mobileSearch.querySelector('input').focus();
    });

    mobileSearchBack.addEventListener('click', () => {
        mobileSearch.classList.remove('active');
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');
    const mobileSearchInput = document.querySelector('.mobile-search input');

    const handleSearch = (searchTerm) => {
        const filteredVideos = videos.filter(video => 
            video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            video.channel.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderVideos(filteredVideos);
    };

    searchBtn.addEventListener('click', () => handleSearch(searchInput.value));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch(searchInput.value);
        }
    });

    mobileSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch(mobileSearchInput.value);
            mobileSearch.classList.remove('active');
        }
    });

    // Make sidebar items clickable
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Add hover animations to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});