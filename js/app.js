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
        delay: 500,
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

// animateBubbles(lightBubblesContainer); // For the light theme
// animateBubbles(darkBubblesContainer);  // For the dark theme

const anonpaymentsBubblesContainer = document.querySelector('#anon-payments');
// animateBubbles(anonpaymentsBubblesContainer)



function AnimationMessage() {
  const messages = document.querySelectorAll('#message-n-content');
  const labels = document.querySelectorAll('#button-label');
  const buttons = document.querySelectorAll('.button-sf');

  const messages1 =  messages[0].innerHTML

  let i = 0;

  setInterval(() => {

  const orig = messages[0].innerHTML;
  if(messages[i]){
    messages[0].innerHTML = messages[i].innerHTML;
    labels[i].innerHTML = "· " + labels[i].innerHTML + " ·";
    buttons[i].classList.add('sf-button-touched');
  }

  i++

  try {
    buttons[i-2].classList.remove('sf-button-touched');
    labels[i-2].innerHTML = labels[i-2].innerHTML.split('·')[1]
  } catch { }


  if(i===4){
    const firstmessage = document.querySelector('#message-n-content-reserve');
    messages[0].innerHTML = firstmessage.innerHTML
    labels[0].innerHTML = "· " + labels[0].innerHTML + " ·";
    buttons[0].classList.add('sf-button-touched');
    buttons[2].classList.remove('sf-button-touched');
    return
  }

  }, 2000);

}




function animateCoins() {
  const coins = document.querySelectorAll('.l-coin');

  // Create an array to store the initial order of the coins
  const initialOrder = Array.from(coins).map((coin) => coin.style.order);

  coins.forEach((coin, index) => {
    setTimeout(() => {
      // Swap the order with the next coin
      const nextIndex = (index + 1) % coins.length;
      coins[nextIndex].style.order = initialOrder[index]; // Swap orders
      coins[nextIndex].style.transition = 'all 1s ease-in-out';
      coins[nextIndex].style.left = '42px'; // Adjust the value to move to the right
    }, index * 1000); // Delay each coin by 1000ms (1 second)
  });
}

animateCoins();





const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log("here here here")
      entry.target.classList.add('show');
      startAnimations(entry.target);
    } else {
      entry.target.classList.remove('show');
    }
  });
});

async function startAnimations(target) {
  FrameAnimation(target);
  const lightBubblesContainer = target.querySelector('.light-bubbles');
  const darkBubblesContainer = target.querySelector('.dark-bubbles');
  const anonpaymentsBubblesContainer = target.querySelector('#anon-payments');

  AnimationMessage();
  
  animateBubbles(lightBubblesContainer);
  animateBubbles(darkBubblesContainer);
  animateBubbles(anonpaymentsBubblesContainer);
}

const blockfeatures = document.getElementById('features-block');
observer.observe(blockfeatures);