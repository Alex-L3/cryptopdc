
const coinwithlabel = document.querySelectorAll("[name='coin-n']");
// const coins = document.querySelectorAll("[name='coin-icon']");
const coinlabels = document.querySelectorAll("[name='coin-n']");






function AnimationComposer(){

}

var tl = anime.timeline({
  autoplay: true,
  loop: false,
});

var tl2 = anime.timeline({
    autoplay: true,
    loop: false,
});

function FrameCurrency(){

 

  tl.add({
    targets: coinwithlabel,
    scale: 1.1,
    delay: anime.stagger(400),
    duration: 1500
  })

  tl2.add({
      targets: '.style-currency',
      delay: anime.stagger(400),
      // color: "#111111",
      // opacity: 80,
      duration: 1500,
  })

}




function FrameCreateApp() {

  tl.add({
    targets: ".createapp-button",
    scale: 1.1,
    duration: 1300,
  //   delay: 3000,
    direction: 'alternate',
  })
  
  tl2.add({
      targets: ".createapp-cursor",
      keyframes: [
      {translateY: 25, translateX:170, delay:1000},
      {translateY: -10, translateX:110, },
      {translateY: 0, translateX:0, delay:1500},
      ],
      easing: 'easeInOutQuad',
      duration: 3000,
  });

}

FrameCurrency()
FrameCreateApp()



var main_tl = anime.timeline({
    
});