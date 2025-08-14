// Movie Database (using TMDB-like structure)
const movieDatabase = {
    trending: [
        {
            id: 1,
            title: "Avatar: The Way of Water",
            year: 2022,
            rating: 8.1,
            poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            genre: ["Action", "Adventure", "Sci-Fi"],
            overview: "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
        },
        {
            id: 2,
            title: "Black Panther: Wakanda Forever",
            year: 2022,
            rating: 7.3,
            poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
            genre: ["Action", "Adventure", "Drama"],
            overview: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death."
        },
        {
            id: 3,
            title: "Top Gun: Maverick",
            year: 2022,
            rating: 8.7,
            poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
            genre: ["Action", "Drama"],
            overview: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it."
        },
        {
            id: 4,
            title: "Doctor Strange in the Multiverse of Madness",
            year: 2022,
            rating: 7.0,
            poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
            genre: ["Action", "Adventure", "Fantasy"],
            overview: "Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff."
        },
        {
            id: 5,
            title: "Minions: The Rise of Gru",
            year: 2022,
            rating: 6.7,
            poster: "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
            genre: ["Animation", "Comedy", "Family"],
            overview: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions."
        }
    ],
    popular: [
        {
            id: 6,
            title: "The Batman",
            year: 2022,
            rating: 8.2,
            poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
            genre: ["Action", "Crime", "Drama"],
            overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler."
        },
        {
            id: 7,
            title: "Spider-Man: No Way Home",
            year: 2021,
            rating: 8.4,
            poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            genre: ["Action", "Adventure", "Fantasy"],
            overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
        },
        {
            id: 8,
            title: "Dune",
            year: 2021,
            rating: 8.1,
            poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            genre: ["Action", "Adventure", "Drama"],
            overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
        },
        {
            id: 9,
            title: "No Time to Die",
            year: 2021,
            rating: 7.3,
            poster: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
            genre: ["Action", "Adventure", "Thriller"],
            overview: "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology."
        },
        {
            id: 10,
            title: "Fast & Furious 9",
            year: 2021,
            rating: 5.2,
            poster: "https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
            genre: ["Action", "Crime", "Thriller"],
            overview: "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother."
        }
    ],
    action: [
        {
            id: 11,
            title: "John Wick: Chapter 4",
            year: 2023,
            rating: 8.0,
            poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            genre: ["Action", "Crime", "Thriller"],
            overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
        },
        {
            id: 12,
            title: "Mission: Impossible – Dead Reckoning Part One",
            year: 2023,
            rating: 7.8,
            poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
            genre: ["Action", "Adventure", "Thriller"],
            overview: "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands."
        },
        {
            id: 13,
            title: "Extraction 2",
            year: 2023,
            rating: 7.2,
            poster: "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
            genre: ["Action", "Thriller"],
            overview: "Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster."
        },
        {
            id: 14,
            title: "Indiana Jones and the Dial of Destiny",
            year: 2023,
            rating: 6.9,
            poster: "https://image.tmdb.org/t/p/w500/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
            genre: ["Action", "Adventure"],
            overview: "Finding himself in a new era, approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands."
        },
        {
            id: 15,
            title: "Transformers: Rise of the Beasts",
            year: 2023,
            rating: 6.1,
            poster: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
            genre: ["Action", "Adventure", "Sci-Fi"],
            overview: "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth."
        }
    ],
    comedy: [
        {
            id: 16,
            title: "Barbie",
            year: 2023,
            rating: 7.2,
            poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
            genre: ["Comedy", "Fantasy"],
            overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans."
        },
        {
            id: 17,
            title: "Cocaine Bear",
            year: 2023,
            rating: 6.0,
            poster: "https://image.tmdb.org/t/p/w500/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
            genre: ["Comedy", "Thriller"],
            overview: "An oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine."
        },
        {
            id: 18,
            title: "The Super Mario Bros. Movie",
            year: 2023,
            rating: 7.0,
            poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            genre: ["Animation", "Adventure", "Comedy"],
            overview: "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi."
        },
        {
            id: 19,
            title: "Puss in Boots: The Last Wish",
            year: 2022,
            rating: 7.9,
            poster: "https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
            genre: ["Animation", "Adventure", "Comedy"],
            overview: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives."
        },
        {
            id: 20,
            title: "Glass Onion: A Knives Out Mystery",
            year: 2022,
            rating: 7.2,
            poster: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
            genre: ["Comedy", "Crime", "Mystery"],
            overview: "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eccentric crew of friends."
        }
    ],
    horror: [
        {
            id: 21,
            title: "Scream VI",
            year: 2023,
            rating: 6.6,
            poster: "https://image.tmdb.org/t/p/w500/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
            genre: ["Horror", "Mystery", "Thriller"],
            overview: "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter."
        },
        {
            id: 22,
            title: "Evil Dead Rise",
            year: 2023,
            rating: 6.7,
            poster: "https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
            genre: ["Horror"],
            overview: "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable."
        },
        {
            id: 23,
            title: "M3GAN",
            year: 2022,
            rating: 6.4,
            poster: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
            genre: ["Horror", "Sci-Fi", "Thriller"],
            overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results."
        },
        {
            id: 24,
            title: "The Menu",
            year: 2022,
            rating: 7.2,
            poster: "https://image.tmdb.org/t/p/w500/v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg",
            genre: ["Comedy", "Horror", "Thriller"],
            overview: "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises."
        },
        {
            id: 25,
            title: "Smile",
            year: 2022,
            rating: 6.5,
            poster: "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
            genre: ["Horror", "Mystery", "Thriller"],
            overview: "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality."
        }
    ],
    romance: [
        {
            id: 26,
            title: "The Kissing Booth 3",
            year: 2021,
            rating: 4.8,
            poster: "https://image.tmdb.org/t/p/w500/c0wCD1ZehsZlyLHa2adZjyLbXou.jpg",
            genre: ["Comedy", "Romance"],
            overview: "It's the summer before Elle heads to college, and she has a secret decision to make. Elle has been accepted into Harvard, where boyfriend Noah is matriculating, and also Berkeley, where her BFF Lee is headed and has to decide if she should stay or not."
        },
        {
            id: 27,
            title: "Purple Hearts",
            year: 2022,
            rating: 6.7,
            poster: "https://image.tmdb.org/t/p/w500/4JyNWkryifWbWXJyxcWh3pVya6N.jpg",
            genre: ["Drama", "Romance"],
            overview: "An aspiring musician agrees to a marriage of convenience with a soon-to-deploy Marine, but a tragedy soon turns their fake relationship all too real."
        },
        {
            id: 28,
            title: "The Summer I Turned Pretty",
            year: 2022,
            rating: 7.4,
            poster: "https://image.tmdb.org/t/p/w500/fjCdV6liRz8aMjWqTmWJPLhZhQs.jpg",
            genre: ["Drama", "Romance"],
            overview: "A love triangle between one girl and two brothers. A story about first love, first heartbreak, and the magic of that one perfect summer."
        },
        {
            id: 29,
            title: "After Ever Happy",
            year: 2022,
            rating: 4.8,
            poster: "https://image.tmdb.org/t/p/w500/6b7swlooCWsNXP4LlLcOLpQV8YV.jpg",
            genre: ["Drama", "Romance"],
            overview: "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for."
        },
        {
            id: 30,
            title: "The Proposal",
            year: 2009,
            rating: 6.7,
            poster: "https://image.tmdb.org/t/p/w500/rV1KzjLKlAaXCbHOB1iBsKjwbH.jpg",
            genre: ["Comedy", "Drama", "Romance"],
            overview: "When she learns she's in danger of losing her visa status and being deported, overbearing book editor Margaret Tate forces her put-upon assistant, Andrew Paxton, to marry her."
        }
    ]
};

// Global variables
let currentSlideIndex = {};
let searchTimeout;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadMovies();
    setupEventListeners();
    setupSliders();
    setupSearch();
    setupModal();
}

// Load movies into different sections
function loadMovies() {
    loadMovieSection('trendingMovies', movieDatabase.trending);
    loadMovieSection('popularMovies', movieDatabase.popular);
    loadMovieSection('actionMovies', movieDatabase.action);
    loadMovieSection('comedyMovies', movieDatabase.comedy);
    loadMovieSection('horrorMovies', movieDatabase.horror);
    loadMovieSection('romanceMovies', movieDatabase.romance);
}

function loadMovieSection(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-movie-id', movie.id);
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
            <div class="movie-rating">
                <i class="fas fa-star"></i>
                ${movie.rating}
            </div>
            <div class="movie-overlay">
                <button class="play-btn">
                    <i class="fas fa-play"></i>
                </button>
            </div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
            <div class="genre-tags">
                ${movie.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
            </div>
        </div>
    `;
    // Add click event listener
    card.addEventListener('click', () => openMovieModal(movie));
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Navigation menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        searchInput.addEventListener('input', handleSearchInput);
    }

    // View all buttons
    document.querySelectorAll('.view-all-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.closest('.movie-section');
            const sectionTitle = section.querySelector('h2').textContent;
            showNotification(`Viewing all ${sectionTitle} movies`, 'info');
        });
    });

    // Hero buttons
    document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const isWatchBtn = e.target.classList.contains('btn-primary');
            const message = isWatchBtn ? 'Starting playback...' : 'Loading more information...';
            showNotification(message, 'success');
        });
    });
}

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(20, 20, 20, 0.98)';
    } else {
        navbar.style.background = 'rgba(20, 20, 20, 0.95)';
    }
}

// Setup movie sliders
function setupSliders() {
    const sliders = document.querySelectorAll('.movies-slider');
    
    sliders.forEach(slider => {
        const sliderId = slider.id;
        currentSlideIndex[sliderId] = 0;
        
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => slideMovies(sliderId, -1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => slideMovies(sliderId, 1));
        }
        
        // Auto-slide functionality
        setInterval(() => {
            slideMovies(sliderId, 1, true);
        }, 10000);
    });
}

function slideMovies(sliderId, direction, auto = false) {
    const slider = document.getElementById(sliderId);
    const moviesRow = slider.querySelector('.movies-row');
    const movieCards = moviesRow.querySelectorAll('.movie-card');
    
    if (movieCards.length === 0) return;
    
    const cardWidth = 250 + 16; // card width + gap
    const visibleCards = Math.floor(slider.offsetWidth / cardWidth);
    const maxIndex = Math.max(0, movieCards.length - visibleCards);
    
    currentSlideIndex[sliderId] += direction;
    
    if (currentSlideIndex[sliderId] < 0) {
        currentSlideIndex[sliderId] = auto ? maxIndex : 0;
    } else if (currentSlideIndex[sliderId] > maxIndex) {
        currentSlideIndex[sliderId] = auto ? 0 : maxIndex;
    }
    
    const translateX = -currentSlideIndex[sliderId] * cardWidth;
    moviesRow.style.transform = `translateX(${translateX}px)`;
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // Add search suggestions
        const suggestionsContainer = createSearchSuggestions();
        searchInput.parentNode.appendChild(suggestionsContainer);
    }
}

function createSearchSuggestions() {
    const container = document.createElement('div');
    container.className = 'search-suggestions';
    container.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--card-background);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: var(--border-radius);
        max-height: 300px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
    `;
    return container;
}

function handleSearchInput(e) {
    const query = e.target.value.trim();
    const suggestionsContainer = document.querySelector('.search-suggestions');
    
    clearTimeout(searchTimeout);
    
    if (query.length < 2) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    searchTimeout = setTimeout(() => {
        showSearchSuggestions(query, suggestionsContainer);
    }, 300);
}

function showSearchSuggestions(query, container) {
    const allMovies = getAllMovies();
    const suggestions = allMovies
        .filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 5);
    
    if (suggestions.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.innerHTML = suggestions.map(movie => `
        <div class="search-suggestion" data-movie-id="${movie.id}">
            <img src="${movie.poster}" alt="${movie.title}" style="width: 40px; height: 60px; object-fit: cover; border-radius: 4px;">
            <div style="margin-left: 10px;">
                <div style="font-weight: 600;">${movie.title}</div>
                <div style="font-size: 0.8rem; color: var(--text-secondary);">${movie.year} • ${movie.genre.join(', ')}</div>
            </div>
        </div>
    `).join('');
    
    container.style.display = 'block';
    
    // Add click listeners to suggestions
    container.querySelectorAll('.search-suggestion').forEach(suggestion => {
        suggestion.addEventListener('click', () => {
            const movieId = parseInt(suggestion.dataset.movieId);
            const movie = allMovies.find(m => m.id === movieId);
            if (movie) {
                openMovieModal(movie);
                container.style.display = 'none';
                document.getElementById('searchInput').value = '';
            }
        });
    });
}

function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (query.length < 2) {
        showNotification('Please enter at least 2 characters to search', 'warning');
        return;
    }
    
    const allMovies = getAllMovies();
    const results = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase())) ||
        movie.overview.toLowerCase().includes(query.toLowerCase())
    );
    
    displaySearchResults(results, query);
    
    // Hide suggestions
    const suggestionsContainer = document.querySelector('.search-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

function displaySearchResults(results, query) {
    const searchResultsSection = document.getElementById('searchResults');
    const searchGrid = document.getElementById('searchGrid');
    const mainContent = document.querySelector('.main-content');
    
    if (results.length === 0) {
        showNotification(`No results found for "${query}"`, 'info');
        return;
    }
    
    // Hide main content and show search results
    mainContent.style.display = 'none';
    searchResultsSection.style.display = 'block';
    
    // Update search results title
    searchResultsSection.querySelector('h2').textContent = `Search Results for "${query}" (${results.length} found)`;
    
    // Clear and populate search grid
    searchGrid.innerHTML = '';
    results.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieCard.classList.add('slide-in-left');
        searchGrid.appendChild(movieCard);
    });
    
    // Scroll to search results
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Add back to home functionality
    if (!document.querySelector('.back-to-home')) {
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-secondary back-to-home';
        backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Home';
        backBtn.addEventListener('click', () => {
            searchResultsSection.style.display = 'none';
            mainContent.style.display = 'block';
            document.getElementById('searchInput').value = '';
            document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
        });
        
        searchResultsSection.querySelector('.container').insertBefore(backBtn, searchGrid);
    }
}

function getAllMovies() {
    return [
        ...movieDatabase.trending,
        ...movieDatabase.popular,
        ...movieDatabase.action,
        ...movieDatabase.comedy,
        ...movieDatabase.horror,
        ...movieDatabase.romance
    ];
}

// Modal functionality
function setupModal() {
    const modal = document.getElementById('movieModal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', closeMovieModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeMovieModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeMovieModal();
        }
    });
}

function openMovieModal(movie) {
    const modal = document.getElementById('movieModal');
    
    // Populate modal content
    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalPoster').alt = movie.title;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalRating').innerHTML = `<i class="fas fa-star"></i> ${movie.rating}`;
    document.getElementById('modalGenre').textContent = movie.genre.join(', ');
    document.getElementById('modalOverview').textContent = movie.overview;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add modal action listeners
    const watchBtn = modal.querySelector('.btn-primary');
    const watchlistBtn = modal.querySelector('.btn-secondary');
    
    watchBtn.onclick = () => {
        showNotification(`Starting "${movie.title}"...`, 'success');
        closeMovieModal();
    };
    
    watchlistBtn.onclick = () => {
        showNotification(`"${movie.title}" added to watchlist`, 'success');
    };
}

function closeMovieModal() {
    const modal = document.getElementById('movieModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = getNotificationIcon(type);
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Advanced features
function initializeAdvancedFeatures() {
    setupIntersectionObserver();
    setupKeyboardNavigation();
    setupTouchGestures();
    setupPerformanceOptimizations();
}

// Intersection Observer for lazy loading and animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Lazy load images
                const img = entry.target.querySelector('img[data-src]');
                if (img) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
            }
        });
    }, observerOptions);
    
    // Observe movie cards
    document.querySelectorAll('.movie-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe sections
    document.querySelectorAll('.movie-section').forEach(section => {
        observer.observe(section);
    });
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('movieModal');
        
        if (modal.style.display === 'block') {
            return; // Let modal handle its own keyboard events
        }
        
        switch(e.key) {
            case 'ArrowLeft':
                if (e.ctrlKey) {
                    // Navigate slider left
                    const activeSlider = document.querySelector('.movies-slider:hover');
                    if (activeSlider) {
                        slideMovies(activeSlider.id, -1);
                    }
                }
                break;
                
            case 'ArrowRight':
                if (e.ctrlKey) {
                    // Navigate slider right
                    const activeSlider = document.querySelector('.movies-slider:hover');
                    if (activeSlider) {
                        slideMovies(activeSlider.id, 1);
                    }
                }
                break;
                
            case '/':
                e.preventDefault();
                document.getElementById('searchInput').focus();
                break;
        }
    });
}

// Touch gestures for mobile
function setupTouchGestures() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.querySelectorAll('.movies-slider').forEach(slider => {
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe(slider.id);
        });
    });
    
    function handleSwipe(sliderId) {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next
                slideMovies(sliderId, 1);
            } else {
                // Swipe right - previous
                slideMovies(sliderId, -1);
            }
        }
    }
}

// Performance optimizations
function setupPerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = handleNavbarScroll;
    
    window.removeEventListener('scroll', originalScrollHandler);
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(originalScrollHandler, 10);
    });
    
    // Preload critical images
    preloadCriticalImages();
    
    // Setup service worker for caching
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
}

function preloadCriticalImages() {
    const criticalImages = [
        ...movieDatabase.trending.slice(0, 5).map(movie => movie.poster),
        ...movieDatabase.popular.slice(0, 5).map(movie => movie.poster)
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Theme management
function setupThemeManagement() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-palette"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--gradient-primary);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        color: white;
        cursor: pointer;
        z-index: 1000;
        transition: var(--transition);
    `;
    
    themeToggle.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggle);
}

function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Initialize advanced features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeAdvancedFeatures();
        setupThemeManagement();
    }, 1000);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Handle offline/online status
window.addEventListener('offline', () => {
    showNotification('You are now offline. Some features may not work.', 'warning');
});

window.addEventListener('online', () => {
    showNotification('Connection restored!', 'success');
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createMovieCard,
        performSearch,
        slideMovies,
        showNotification
    };
}
