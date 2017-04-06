$(document).ready(function(){
    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    });
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('.ir-arriba').fadeIn(300);
      } else {
        $('.ir-arriba').fadeOut(400);
      }
    });
    $(".carrera1").animate({fadeIn},200);
    $(".carrera2").fadeIn(300);
    $(".carrera3").fadeIn(400);
  });
/*$(document).ready(function(){
  
});*/

function DeptoSinWeb(){
			swal({
  				title: '<span class="informa_titulo">Sin sitio</span>',
  				/*imageUrl: 'img/thumbs-up.jpg',
  				imageWidth: 300,
  				imageHeight: 300,*/
  				html: $('<div>')
    				.addClass('informa_texto')
    				.text('Este departamento no cuenta con sitio web propio.'),
  				animation: false,
  				customClass: 'animated2 fadeIn',
  				showCloseButton: true,
  				buttonsStyling: false,
  				confirmButtonClass: 'boton-confirma'
				});
}

$(function(){
  $(".carrera-nombre").click(function(e){
           
        e.preventDefault();
    
        var contenido=$(this).next(".carrera-contenido");

        if(contenido.css("display")=="none"){ //open        
          contenido.slideDown(250);         
          $(this).addClass("open");
          /*$(".carreras").css("height","100vh");*/
        }
        else{ //close       
          contenido.slideUp(250);
          $(this).removeClass("open");
          /*$(".carreras").css("height","700px");  */
        }
        
      });
});

$(document).ready(main);
 
var contador = 1;
 
function main () {
  $('.menu_bar').click(function(){
    if (contador == 1) {
      $('nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }
  });
  // Mostramos y ocultamos submenus
  $('.submenu').click(function(){
    $(this).children('.children').slideToggle();
  });
}