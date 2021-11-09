const menuIbox = document.querySelector('.menu_ibox');
const btnJs = document.querySelector('.btn_js');
const navbarJs = document.querySelector('.navbar_js');
{/* <i class='bx bx-menu-alt-right' ></i> */}

btnJs.addEventListener('click', ()=>{
    navbarJs.classList.toggle('changeMenu');
    if(navbarJs.classList.contains('changeMenu')){
        menuIbox.classList.replace('bx-menu-alt-left', 'bx-menu-alt-right');
    }else{
        menuIbox.classList.replace('bx-menu-alt-right', 'bx-menu-alt-left');

    }
});


// Slick
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  });

// venobox
$(document).ready(function(){
    $('.venobox').venobox(); 
});