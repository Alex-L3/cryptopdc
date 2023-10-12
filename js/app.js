/* Light-Dark Mode */

const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');

// Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme','light');
    return;
  }

  document.documentElement.classList.add('dark');
  localStorage.setItem('theme','dark');
};

sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});



/* Pagination Usercases */

function updateCurrentSlideText() {
    const currentSlideText = document.getElementById('current-slide');
    currentSlideText.textContent = String(currentSlideIndex + 1).padStart(2, '0');
}

const slides = document.querySelectorAll('.slide');
const paginationItems = document.querySelectorAll('[id^="page-slide-"]');
let currentSlideIndex = 0;

function showSlide(slideIndex) {
  if (slideIndex >= 0 && slideIndex < slides.length) {
    slides[currentSlideIndex].classList.add('hidden');
    slides[slideIndex].classList.remove('hidden');
    paginationItems[currentSlideIndex].classList.remove('page-slide-active');
    paginationItems[slideIndex].classList.add('page-slide-active');
    currentSlideIndex = slideIndex;
    updateCurrentSlideText();
  }
}

function setSlide(slideIndex) {
  showSlide(slideIndex - 1);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
    setSlide(nextSlideIndex + 1);
  }, 5000); // Change slides every 5 seconds
}

// startAutoSlide(); // Start auto-sliding when the page loads



/* Features Animaion Frames */


// Function to animate bubbles Phone Mockup
function animateBubbles(bubblesContainer) {
    const bubbles = bubblesContainer.querySelectorAll('img');
  
    bubbles.forEach((bubble, index) => {
      const timeline = anime.timeline({
        autoplay: true,
        loop: true,
      });
  
      timeline.add({
        targets: bubble,
        opacity: 1,
        translateY: 0,
        duration: 1000,
      });
      timeline.add({
        targets: bubble,
        opacity: 0,
        translateY: -20,
        duration: 1000,
        delay: 2000,
      });
    });
  }
  
  // Get the light and dark bubble containers and apply the animation
  const lightBubblesContainer = document.querySelector('.light-bubbles');
  const darkBubblesContainer = document.querySelector('.dark-bubbles');
  
  animateBubbles(lightBubblesContainer); // For the light theme
  animateBubbles(darkBubblesContainer);  // For the dark theme