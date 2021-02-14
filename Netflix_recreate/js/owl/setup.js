$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    /* definir a quantidade de imagens mostradas, dependendo do tamanho da tela*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function Popup(){
    document.getElementById("popup-1").classList.toggle("active");
  }
