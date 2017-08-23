/* Navbar scroll */
$(function(){

	var nav = $('.navbar'),
		doc = $(document),
		win = $(window);

	win.scroll(function() {

		if (doc.scrollTop() > 80) {
			nav.addClass('scrolled');
		} else {
			nav.removeClass('scrolled');
		}

	});

	
	
	win.scroll();

});


/* ***** Btn More-Less ***** */
$("#more").click(function(){
    var $this = $(this);
    $this.toggleClass('more');
    if($this.hasClass('more')){
        $this.text('More');         
    } else {
        $this.text('Less');
    }
});




/* ***** Slideanim  ***** */
 $(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
}); 




/* ***** Smooth Scrolling  ***** */
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

   
    // (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });


  /* ***** Scroll to Top ***** */ 
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 300) {        
          $('.to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('.to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('.to-top').click(function() {      
      $('.body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });






})

