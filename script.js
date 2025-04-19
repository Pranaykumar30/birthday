// Global variables
let musicPlaying = false;
const audio = document.getElementById('background-music');
const musicHint = document.querySelector('.music-hint');
let currentSection = 'welcome';
const sections = ['welcome', 'letter', 'gallery', 'surprise'];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Create animated hearts for welcome section
  createHearts();
  
  // Create rose petals for surprise section
  createRosePetals();
  
  // Create sparkles for surprise section
  createSparkles();
  
  // Listen for user interaction to play music
  document.addEventListener('click', function() {
    toggleMusic();
  }, { once: true });
  
  // Handle music controls after initial play
  audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
  });
  
  // Show active section
  showSection(currentSection);
  
  // Add responsive navigation
  addNavigationListeners();
});

// Toggle music function
function toggleMusic() {
  if (!musicPlaying) {
    audio.play().catch(error => {
      console.log('Music playback prevented:', error);
    });
    musicPlaying = true;
    musicHint.style.display = 'none';
  } else {
    audio.pause();
    musicPlaying = false;
  }
}

// Navigation between sections
function showSection(sectionId) {
  // Hide all sections
  sections.forEach(section => {
    document.getElementById(section).classList.remove('active');
  });
  
  // Show selected section with animation
  const targetSection = document.getElementById(sectionId);
  targetSection.classList.add('active');
  
  // Scroll to top of the section
  targetSection.scrollTop = 0;
  
  // Update current section
  currentSection = sectionId;
  
  // Refresh animations if needed
  if (sectionId === 'welcome') {
    refreshHearts();
  } else if (sectionId === 'surprise') {
    refreshRosePetals();
    refreshSparkles();
  }
}

// Heart animation for welcome section
function createHearts() {
  const heartsContainer = document.querySelector('.hearts');
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = `
      <svg viewBox="0 0 24 24" width="${10 + Math.random() * 20}px" height="${10 + Math.random() * 20}px" fill="#d81b60" opacity="${0.3 + Math.random() * 0.7}">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `-${Math.random() * 50}px`;
    heart.style.position = 'absolute';
    heart.style.animation = `floatHeart ${5 + Math.random() * 10}s linear infinite`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heartsContainer.appendChild(heart);
  }
  
  // Create the animation
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes floatHeart {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(${Math.random() * 360}deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function refreshHearts() {
  const heartsContainer = document.querySelector('.hearts');
  heartsContainer.innerHTML = '';
  createHearts();
}

// Rose petals animation for surprise section
function createRosePetals() {
  const petalsContainer = document.querySelector('.rose-petals');
  for (let i = 0; i < 30; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = `
      <svg viewBox="0 0 24 24" width="${15 + Math.random() * 25}px" height="${15 + Math.random() * 25}px" fill="#e91e63" opacity="${0.4 + Math.random() * 0.6}">
        <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z"/>
      </svg>
    `;
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = `-${Math.random() * 50}px`;
    petal.style.position = 'absolute';
    petal.style.animation = `floatPetal ${7 + Math.random() * 10}s linear infinite`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    petalsContainer.appendChild(petal);
  }
  
  // Create the animation
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes floatPetal {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(${Math.random() * 720 - 360}deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function refreshRosePetals() {
  const petalsContainer = document.querySelector('.rose-petals');
  petalsContainer.innerHTML = '';
  createRosePetals();
}

// Sparkles animation for surprise section
function createSparkles() {
  const sparklesContainer = document.querySelector('.sparkles');
  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.innerHTML = `
      <svg viewBox="0 0 24 24" width="${5 + Math.random() * 10}px" height="${5 + Math.random() * 10}px" fill="#ffeb3b" opacity="${0.5 + Math.random() * 0.5}">
        <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
      </svg>
    `;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.position = 'absolute';
    sparkle.style.animation = `twinkle ${1 + Math.random() * 3}s ease-in-out infinite`;
    sparkle.style.animationDelay = `${Math.random() * 3}s`;
    sparklesContainer.appendChild(sparkle);
  }
  
  // Create the animation
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes twinkle {
      0%, 100% {
        transform: scale(0.5);
        opacity: 0.3;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
}

function refreshSparkles() {
  const sparklesContainer = document.querySelector('.sparkles');
  sparklesContainer.innerHTML = '';
  createSparkles();
}

// Add keyboard navigation for accessibility
function addNavigationListeners() {
  document.addEventListener('keydown', function(event) {
    // ESC key to go back to welcome
    if (event.key === 'Escape') {
      showSection('welcome');
    }
    
    // Arrow keys for navigation
    if (event.key === 'ArrowRight') {
      const currentIndex = sections.indexOf(currentSection);
      if (currentIndex < sections.length - 1) {
        showSection(sections[currentIndex + 1]);
      }
    }
    
    if (event.key === 'ArrowLeft') {
      const currentIndex = sections.indexOf(currentSection);
      if (currentIndex > 0) {
        showSection(sections[currentIndex - 1]);
      }
    }
    
    // M key for music toggle
    if (event.key === 'm' || event.key === 'M') {
      toggleMusic();
    }
  });
}
