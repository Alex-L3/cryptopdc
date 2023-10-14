
// const coinwithlabel = document.querySelectorAll("[name='coin-n']");
const coins = document.querySelectorAll("[name='coin-icon']");
const coinlabels = document.querySelectorAll("[name='coin-n']");

const scaletarget = coins

function FrameAnimation() {

  var tl = anime.timeline({autoplay: true, loop: false,});
  var tl2 = anime.timeline({autoplay: true, loop: false,});
  var tl3 = anime.timeline({autoplay: true, loop: false,}); 

  tl3.add({
      targets: '.style-currency',
      delay: anime.stagger(400),
      opacity: [0.7,0.3],
      duration: 1500,
      easing: 'easeInOutQuad',
      direction: 'alternate',
  })
  
  tl.add({
    targets: scaletarget,
    scale: 1.1,
    delay: anime.stagger(400),
    duration: 1500
  })
  
  tl2.add({
      targets: '.style-currency',
      delay: anime.stagger(400),
      // color: "#111111",
      // do not delete
      // opacity: 80,
      duration: 1500,
  })
  
  
  tl.add({
    targets: ".createapp-button",
    scale: 1.1,
    duration: 1300,
    direction: 'alternate',
  }).add({
    targets: ".createapp-button",
    scale: 1.0,
    duration: 1200,
  })
  
  anime.set()
  
  tl2.add({
      targets: ".createapp-cursor",
      keyframes: [
      // {translateY: 25, translateX:170, delay:1000},
      // {translateY: -10, translateX:110, },
      // {translateY: 0, translateX:0, delay:1500},
      {translateY: -55, translateX:-80, delay:1500},
      {translateY: -35, translateX:-30, scale:0.98, delay:1200},
      // {translateY: 0, translateX:0, delay:1500},
      ],
      easing: 'easeInOutQuad',
      duration: 3000,
  }).add({
      targets: ".createapp-cursor",
      
  })
  
}



