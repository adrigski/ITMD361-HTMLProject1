function init(){
    new Splide( '#image-slider', {
      'cover'      : true,
      'heightRatio': 0.5,
  } ).mount();
}

window.addEventListener('load', init);