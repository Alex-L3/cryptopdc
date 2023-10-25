
// const coinwithlabel = document.querySelectorAll("[name='coin-n']");
const coins = document.querySelectorAll("[name='coin-icon']");
const coinlabels = document.querySelectorAll("[name='coin-n']");
const mobilecoins = document.querySelectorAll("#currency-coins-mobile img");
// console.log(coins)

function coinAnimation() {

  var tl = anime.timeline({autoplay: true, loop: false,});
  var tl2 = anime.timeline({autoplay: true, loop: false,});
  var tl_m = anime.timeline({autoplay: true, loop: false,});
  var tl3 = anime.timeline({autoplay: true, loop: false,});

  tl.add({
    targets: coins,
    scale: 1.1,
    delay: anime.stagger(400),
    duration: 1500
  })

  tl_m.add({
    targets: mobilecoins,
    scale: 1.1,
    delay: anime.stagger(400),
    duration: 1500
  })

  tl3.add({
      targets: '.style-currency',
      delay: anime.stagger(400),
      opacity: [0.7,0.3],
      duration: 1500,
      easing: 'easeInOutQuad',
      direction: 'alternate',
  })

  tl2.add({
    targets: '.style-currency',
    delay: anime.stagger(400),
    // color: "#111111",
    // do not delete
    // opacity: 80,
    duration: 1500,
  })
  
}

function createAppAnimation() {

  var tl = anime.timeline({autoplay: true, loop: false,});
  var tl2 = anime.timeline({autoplay: true, loop: false,});
  var tl3 = anime.timeline({autoplay: true, loop: false,});

  tl.add({
    targets: ".createapp-button",
    scale: 1.1,
    duration: 1300,
    delay: 2900,
    direction: 'alternate',
  })
  .add({
    targets: ".createapp-button",
    scale: 1.0,
    duration: 1200,
  })
  
  // anime.set()
  
  tl2.add({
      targets: "#cursor-smooth",
      keyframes: [
 
      {translateY: 0, translateX:0},
      {translateY: -25, translateX:-30, delay:900},
      {translateY: 0, translateX:0, scale:0.98, delay:1500},

      ],
      easing: 'easeInOutQuad',
      duration: 3000,
  })

  tl3.add({
    targets: ".createapp-button",
    // filter: "brightness(95%)",
    duration: 500,
    delay: 2800,
    easing: 'easeInQuad',
  }).add({
    targets: ".createapp-button",
    // filter: "brightness(100%)",
    delay: 400,
    duration: 800,
    easing: 'easeOutQuad',
  })
  
}


function tapMessageAnimation(el) {
  var tl = anime.timeline({autoplay: true, loop: false,});

  tl.add({
    // targets: ".button-tap",
    targets: el,
    keyframes: [
      {scale: 1.4, opacity: 0.3},
      {scale: 1.0, opacity: 0.0, delay:100}
    ],
    duration: 500,
    easing: 'easeOutQuad',
  })

}

// tapMessageAnimation()
