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

   // Clear existing autoSlideInterval
   if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }

  // Start new
  startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
    setSlide(nextSlideIndex + 1);
  }, 5000); // Change slides every 5 seconds
}

// startAutoSlide(); // Start auto-sliding when the page loads

let autoSlideInterval = null;

// Create an Intersection Observer to track the "usecases-block" section
const usecasesBlock = document.getElementById('usecases-block');
const observerautoSlide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            startAutoSlide(); // Start auto-sliding when "usecases-block" is in the viewport
        } else {
          // Stop auto-sliding when "usecases-block" is out of the viewport
            if (autoSlideInterval) {
              clearInterval(autoSlideInterval);
              autoSlideInterval = null; // Reset autoSlideInterval to null
            }
        }
    });
});

observerautoSlide.observe(usecasesBlock);

/* Pagination Usercases End */




/* Features Animaion Frames */

function animateBubbles(bubblesContainer) {
  const bubbles = bubblesContainer.querySelectorAll('img');

  function animateBubbleOut(bubble) {
    anime({
      targets: bubble,
      keyframes: [
        // { opacity: 0.0, scale: 0.92, translateY: 20 },
        { opacity: 1, scale: 1, translateY: 0 },
        { opacity: 0.5, scale: 0.92, translateY: -20 },
      ],
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: function (anim) {
        // Animation is complete, now loop back to the first bubble
        animateBubbleDissappear(bubble);
      },
    })
  }

  function animateBubbleIn(bubble) {
    anime({
      targets: bubble,
      keyframes: [
        { opacity: 0.0, scale: 0.92, translateY: 20 },
        { opacity: 1, scale: 1, translateY: 0 },
        // { opacity: 0.5, scale: 0.92, translateY: -20 },
      ],
      duration: 1000,
      easing: 'easeInOutQuad',
    })
  }

  function animateBubbleDissappear(bubble) {
    anime({
      targets: bubble,
      keyframes: [
        { opacity: 0.5, scale: 0.92, translateY: -20 },
        { opacity: 0.0, scale: 0.92, translateY: -20 },
        { opacity: 0.0, scale: 1.0, translateY: 0 },
        // { opacity: 0.5, scale: 0.92, translateY: -20 },
      ],
      duration: 3000,
      easing: 'easeOutQuad',
    })
  }

  function animateBubbleLoop(bubbles) {
    anime({
      targets: bubbles[3],
      keyframes: [
        { opacity: 1.0, scale: 1.0, translateY: 0 },
        { opacity: 0.0, scale: 1.0, translateY: 0 },
        // { opacity: 0.5, scale: 0.92, translateY: -20 },
      ],
      duration: 1,
      easing: 'easeOutQuad',
    })

    anime({
      targets: bubbles[0],
      keyframes: [
        { opacity: 0.0, scale: 1.0, translateY: 0 },
        { opacity: 1.0, scale: 1.0, translateY: 0 },
        // { opacity: 0.5, scale: 0.92, translateY: -20 },
      ],
      duration: 1,
      easing: 'easeOutQuad',
    })
  }

  // animateBubbleOut(bubbles[0])
  // animateBubbleIn(bubbles[1])
  // animateBubbleOut(bubbles[1])

  setTimeout(()=>{
    animateBubbleOut(bubbles[0])
    animateBubbleIn(bubbles[1])
  })

  setTimeout(()=>{
    animateBubbleOut(bubbles[1])
    animateBubbleIn(bubbles[2])
  },1500)

  setTimeout(()=>{
    animateBubbleOut(bubbles[2])
    animateBubbleIn(bubbles[3])
  },3000)

  setTimeout(()=>{
    animateBubbleLoop(bubbles)
  },6000)

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

  const message_viewport = document.querySelector('#message-viewport');

  const messages1 = messages[0].innerHTML;
  const orig_lab = labels[0].innerHTML;

  const tapbutton = document.querySelectorAll('.button-tap');

  let i = 0;

  setInterval(() => {
    
  try{
    tapMessageAnimation(tapbutton[i])
    message_viewport.innerHTML = messages[i].innerHTML;
    labels[i].innerHTML = "· " + labels[i].innerHTML + " ·";
    buttons[i].classList.add('sf-button-touched');
  } catch { }
 
  i++

  try {
    buttons[i-2].classList.remove('sf-button-touched');
    labels[i-2].innerHTML = labels[i-2].innerHTML.split('·')[1]
  } catch {  }

  if(i === 4){
    buttons[0].classList.add('sf-button-touched');
    tapMessageAnimation(tapbutton[0])
    let i = 0;
    return
  }

  }, 2000);

}

// AnimationMessage()


function ShuffleCoins(){
  const coinicons = document.querySelectorAll(".l-coin");
  const logos = document.querySelectorAll(".l-coin-icon");
  // coins[1].style.transition = 'all 1s ease-in-out';

  setTimeout(() => {
      coinicons[2].classList.toggle('dino-ton')
      coinicons[1].classList.toggle('dino-btc')
      coinicons[0].classList.toggle('dino-usdt')
  }, 1000);
  
}

// ShuffleCoins()


const timeoutIds = {}; // Object to store timeout IDs
let played = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log("here here here")
      // entry.target.classList.remove('hide');
      // entry.target.classList.add('show');
      startAnimations(entry.target);
      played = true;
    } else {
      // entry.target.classList.remove('show');
      if (played) {
        cancelAnimations()
      }
    }
  });
});

async function startAnimations(target) {
  const lightBubblesContainer = target.querySelector('.light-bubbles');
  const darkBubblesContainer = target.querySelector('.dark-bubbles');
  const anonpaymentsBubblesContainer = target.querySelector('#anon-payments');

  // FrameAnimation(target);
  // setTimeout(() => FrameAnimation(target), 5000);
  // timeoutIds.frameAnimation = setTimeout(() => FrameAnimation(target), 1000);

  timeoutIds.coinAnimation = setTimeout(() => coinAnimation(), 1000);
  timeoutIds.createAppAnimation = setTimeout(() => createAppAnimation(), 3000);
 
  // setTimeout(() => ShuffleCoins(), 14000);
  timeoutIds.shufflecoins = setTimeout(() => ShuffleCoins(), 7500);

  // setTimeout(() => AnimationMessage(), 5000);
  timeoutIds.animationMessage = setTimeout(() => AnimationMessage(), 9500);
  
  // setTimeout(() => animateBubbles(lightBubblesContainer), 20000);
  // setTimeout(() => animateBubbles(darkBubblesContainer), 20000);
  timeoutIds.animateBubbles_light = setTimeout(() => animateBubbles(lightBubblesContainer), 19000);
  timeoutIds.animateBubbles_dark = setTimeout(() => animateBubbles(darkBubblesContainer), 19000);

  // setTimeout(() => animateBubbles(anonpaymentsBubblesContainer), 26000);
  timeoutIds.anonpaymentsBubblesContainer = setTimeout(() => animateBubbles(anonpaymentsBubblesContainer), 24000);

}

function cancelAnimations(target) {
  // Clear the stored timeout IDs
  for (const key in timeoutIds) {
    if (timeoutIds.hasOwnProperty(key)) {
      clearTimeout(timeoutIds[key]);
    }
  }
}

const blockfeatures = document.getElementById('features-block');
observer.observe(blockfeatures);



const h1Animation = anime({
  targets: ".h1-header",
  translateX: [-60, 0],
  opacity: [0, 1],
  duration: 2500,
  delay: 400,
  easing: "easeOutExpo",
});

const ImagePhoneAnimation = anime({
  targets: "#img-phone",
  translateX: [60, 0],
  opacity: [0, 1],
  duration: 2500,
  delay: 800,
  easing: "easeOutExpo",
});

const getStartedBtnAnimation = anime({
  targets: ".btn",
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 600,
  delay: 1500,
  easing: "easeInExpo",
});

const photoBotsAnimation = anime({
  targets: "#photo-bots .rounded-full",
  translateX: [-10,0],
  opacity: [0, 1],
  delay: anime.stagger(150, {start: 1500}), 
  duration: 500,
  easing: "easeInOutQuad",
});

const baseTextAnimation = anime({
  targets: "#header .base-text, #hero-block .base-text",
  translateY: [30, 0],
  opacity: [0, 1],
  duration: 2000,
  //delay: 1500,
  delay: anime.stagger(200, {start: 1500}), 
  easing: "easeOutExpo",
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log('entry!')
        if (entry.isIntersecting) {
          scrollAnimateBaseText(entry.target);
        } else {
        // cancelAnimations(entry.target)
        }
    });
});

async function scrollAnimateBaseText(target) {
    const baseTextAnimation = anime({
        targets: target,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 2000,
        // delay: 400,
        delay: anime.stagger(200, {start: 400}), 
        easing: "easeOutExpo",
    });
}

const basetexts = document.querySelectorAll('#instruction-block .base-text, #yBlockAPI .base-text, #footer .base-text, #yBlockDevCommunity .base-text  ');
basetexts.forEach((el) => observer2.observe(el));


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log('entry!')
        if (entry.isIntersecting) {
          scrollAnimateHeadings(entry.target);
        } else {
        // cancelAnimations(entry.target)
        }
    });
});

async function scrollAnimateHeadings(target) {
    const baseTextAnimation = anime({
  targets: target,
  translateX: [-60, 0],
  opacity: [0, 1],
  duration: 1500,
  delay: 200, // Start immediately
  easing: "easeOutExpo",
    });
}

const headers = document.querySelectorAll("#yBlockAPI .h2-header, #yBlockDevCommunity .h2-header ");
headers.forEach((el) => observer3.observe(el));
