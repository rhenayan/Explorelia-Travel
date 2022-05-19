

const swiper = new Swiper('.swiper', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },

  });


  // SCROLL MAGIC

  //init scroll magic
  const controller = new ScrollMagic.Controller();

  //Pinning

  const pinIntroScene1 = new ScrollMagic.Scene({
    triggerElement: '#pin-trigger1',
    triggerHook: 0,
    duration: '30%'
  
  })
  .setPin('#pin-trigger1', {pushFollowers: false})
  
 
  const pinIntroScene2 = new ScrollMagic.Scene({
    triggerElement: '#pin-trigger2',
    triggerHook: '0.5',
 
  }) 
  .setPin('#pin-trigger1', {pushFollowers: false})

    controller.addScene([
    pinIntroScene1,
    pinIntroScene2])


 
// SCROLL REVEAL

const textList = document.querySelectorAll('.animate');
const imageList = document.querySelectorAll('.animate-image')
const buttonList = document.querySelectorAll('.animate-button');
const verticals = document.querySelectorAll('.animate-side');

ScrollReveal({ 
  reset: false, 
 
  });

const slideUp = {
  distance: '60px',
  easing: 'ease', 
  origin: 'bottom',
  duration: 700,

}

const slide = {
  easing:'ease-in',
  distance: '80px',
  duration: 500,
}

const fade = {
  opacity:0,
  duration: 700,
  easing:'ease',
  delay: 50,

}

//Text

ScrollReveal().reveal(textList, fade);
ScrollReveal().reveal(verticals, fade);
// ScrollReveal().reveal(verticals, {
//   delay: 0,
// })
//Images

ScrollReveal().reveal(imageList[0], slide)
ScrollReveal().reveal(imageList[0], {
  origin: 'left',
  delay: 1200,
})

ScrollReveal().reveal(imageList[1],slide)
ScrollReveal().reveal(imageList[1], {
  origin: 'right',
  delay: 600,
})

ScrollReveal().reveal(imageList[2], slide)
ScrollReveal().reveal(imageList[2], {
  origin:'left',
  delay: 800,
})

ScrollReveal().reveal(imageList[3], slide)
ScrollReveal().reveal(imageList[3], {
  origin:'right',
  delay: 900,
})

ScrollReveal().reveal(imageList[4],fade)
  
ScrollReveal().reveal(imageList[5], {
  origin: 'bottom',
  scale: 0.85,
  delay: 800,
  duration: 800,
})
    
ScrollReveal().reveal(imageList[6], {
  origin: 'right',
  scale: 0.85,
  delay: 1000,
  duration: 800,
})
    

//Buttons 

ScrollReveal().reveal(buttonList, fade)

 