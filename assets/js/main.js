
// parallax
$(window).scroll(function(){

    // Add parallax scrolling to all images in .paralax-image container
    $('.parallax, .__profparallax, .__lastparallax').each(function(){
        // only put top value if the window scroll has gone beyond the top of the image
        if ($(this).offset().top < $(window).scrollTop()) {
        // Get ammount of pixels the image is above the top of the window
        var difference = $(window).scrollTop() - $(this).offset().top;
        // Top value of image is set to half the amount scrolled
        // (this gives the illusion of the image scrolling slower than the rest of the page)
        var half = (difference / 2) + 'px',
        transform = 'translate3d( 0, ' + half + ',0)';

        $(this).find('.para').css('transform', transform);
        } else {
          // if image is below the top of the window set top to 0
        $(this).find('.para').css('transform', 'translate3d(0,0,0)');
        }
    });
});

function lightbox(idx) {
            //show the slider's wrapper: this is required when the transitionType has been set to "slide" in the ninja-slider.js
            var ninjaSldr = document.getElementById("ninja-slider");
            ninjaSldr.parentNode.style.display = "block";

            nslider.init(idx);

            var fsBtn = document.getElementById("fsBtn");
            fsBtn.click();
        }

        function fsIconClick(isFullscreen, ninjaSldr) { //fsIconClick is the default event handler of the fullscreen button
            if (isFullscreen) {
                ninjaSldr.parentNode.style.display = "none";
            }
        }
    

    // dropdown style
        // $(document).ready(function(){
        //     $(".dropdown").hover(            
        //         function() {
        //             $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
        //             $(this).toggleClass('open');        
        //         },
        //         function() {
        //             $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
        //             $(this).toggleClass('open');       
        //         }
        //     );
        // });

        // dropdown
    // $(document).ready(function(){
    //     $('.dropdown-submenu a.test').on("click", function(e){
    //         $(this).next('ul').toggle();
    //         e.stopPropagation();
    //         e.preventDefault();
    //     });
    // });




var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}


