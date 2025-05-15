// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});

// Sample Data for Dynamic Content
const episodes = [
    {
        title: "One Piece - Latest Episode",
        episode: "EP 1098",
        thumbnail: "https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/_42893590_714f_48de_9996_04953b7cc077_by_gallerybrisart_dgm05bd-pre.jpg",
        description: "The Straw Hat Pirates continue their epic journey in the New World..."
    },
    {
        title: "Bleach: Thousand-Year Blood War",
        episode: "EP 13",
        thumbnail: "https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/bleach-thousand-year-blood-war.jpg",
        description: "Ichigo and his allies face their greatest challenge yet in the war against the Quincy..."
    },
    {
        title: "One Piece - Gear 5 Reveal",
        episode: "EP 1071",
        thumbnail: "https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/gear5.jpg",
        description: "Witness the incredible transformation that shook the anime world..."
    }
];

const characters = [
    {
        name: "Monkey D. Luffy",
        role: "Captain of the Straw Hat Pirates",
        image: "https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/luffy.jpg",
        description: "A rubber man with big dreams of becoming the King of the Pirates."
    },
    {
        name: "Ichigo Kurosaki",
        role: "Substitute Soul Reaper",
        image: "https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/ichigo.jpg",
        description: "A powerful Soul Reaper protecting both the living and spirit worlds."
    },
    {
        name: "Roronoa Zoro",
        role: "Straw Hat Pirates' Swordsman",
        image: "https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/zoro.jpg",
        description: "A master swordsman aiming to become the world's greatest."
    },
    {
        name: "Rukia Kuchiki",
        role: "Soul Reaper Lieutenant",
        image: "https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/rukia.jpg",
        description: "A noble Soul Reaper who changed Ichigo's destiny."
    }
];

// Add styles for episode and character cards
const style = document.createElement('style');
style.textContent = `
    .episode-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .episode-card:hover {
        transform: translateY(-5px);
    }

    .episode-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        background-color: #f0f0f0;
    }

    .episode-info {
        padding: 1.5rem;
    }

    .episode-info h3 {
        color: var(--text-color);
        margin-bottom: 0.5rem;
    }

    .episode-number {
        display: inline-block;
        background: var(--accent-blue);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .character-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease;
    }

    .character-card:hover {
        transform: translateY(-5px);
    }

    .character-card img {
        width: 100%;
        height: 280px;
        object-fit: cover;
        background-color: #f0f0f0;
    }

    .character-card h3 {
        color: var(--text-color);
        margin: 1rem 0 0.5rem;
        padding: 0 1rem;
    }

    .character-card .role {
        display: block;
        color: var(--accent-pink);
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .character-card p {
        padding: 0 1rem 1.5rem;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);

// Function to handle image loading errors
function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    if (img.parentElement.classList.contains('episode-card')) {
        img.src = 'https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/default-episode.jpg';
    } else {
        img.src = 'https://raw.githubusercontent.com/faredibrahem2000/anime-world/main/images/default-character.jpg';
    }
}

// Populate Episodes Section
const episodeGrid = document.querySelector('.episode-grid');
episodes.forEach(episode => {
    const episodeCard = document.createElement('div');
    episodeCard.className = 'episode-card';
    episodeCard.innerHTML = `
        <img src="${episode.thumbnail}" alt="${episode.title}" onerror="handleImageError(this)">
        <div class="episode-info">
            <h3>${episode.title}</h3>
            <span class="episode-number">${episode.episode}</span>
            <p>${episode.description}</p>
        </div>
    `;
    episodeGrid.appendChild(episodeCard);
});

// Populate Characters Section
const characterGrid = document.querySelector('.character-grid');
characters.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.className = 'character-card';
    characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}" onerror="handleImageError(this)">
        <h3>${character.name}</h3>
        <span class="role">${character.role}</span>
        <p>${character.description}</p>
    `;
    characterGrid.appendChild(characterCard);
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
}); 