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

startAutoSlide(); // Start auto-sliding when the page loads




/* Features Animaion Frames */


// Function to animate bubbles

function animateBubbles(bubblesContainer) {
  const bubbles = bubblesContainer.querySelectorAll('img');
  let index = 0;

  function showBubble() {

    if (index == bubbles.length){
      bubbles[0].style.display = 'inline';

      anime({
        targets: bubbles[index],
        scale: 1.0,
        delay: 800,
        duration: 900,
        easing: 'easeInQuad'
      });

    }

    if (index < bubbles.length) {
      bubbles[index].style.display = 'inline';

      anime({
        targets: bubbles[index],
        scale: 0.94,
        opacity: 1,
        translateY: -15,
        delay: 800,
        duration: 800,
        easing: 'easeInQuad'
      });

      if (index > 0) {
        // Hide the outgoing bubble
        bubbles[index - 1].style.display = 'inline';
        
        // anime({
        //   targets: bubbles[index-1],
        //   scale: 0.95,
        //   opacity: 1.0,
        //   translateY: -15,
        //   delay: 1000,
        //   duration: 2000,
        //   direction: ''
        // });
      }

      index++;
      
      setTimeout(showBubble, 1500); // Adjust the delay (in milliseconds) as needed
      
    }
  }

  showBubble();
}


// Light and dark bubble containers and apply the animation
const lightBubblesContainer = document.querySelector('.light-bubbles');
const darkBubblesContainer = document.querySelector('.dark-bubbles');

animateBubbles(lightBubblesContainer); // For the light theme
animateBubbles(darkBubblesContainer);  // For the dark theme

const anonpaymentsBubblesContainer = document.querySelector('#anon-payments');
animateBubbles(anonpaymentsBubblesContainer)



function animateCoins() {
  const coins = document.querySelectorAll('.l-coin');
  console.log()
  
  coins.forEach((coin, index) => {
      setTimeout(() => {
          coin.style.transition = 'all 1s ease-in-out';
          coin.style.left = '40px'; // Adjust the value to move to the right
      }, index * 1000); // Delay each coin by 1000ms (1 second)
  });
}

animateCoins()




const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log('animation start!')
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      FrameAnimation()
      animateBubbles(lightBubblesContainer); // For the light theme
      animateBubbles(darkBubblesContainer);
      animateBubbles(anonpaymentsBubblesContainer)

    } else {
      entry.target.classList.remove('show');
    }
  })
})

const blockfeatures = document.getElementById('features-block');
// hideElem.forEach((el) => observer.observe(el));
observer.observe(blockfeatures)