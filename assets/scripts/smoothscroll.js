$(document).ready(function(){
    // Add smooth scrolling to all links
  $('a:not([href="#vitrisCarousel"])').on('click', function(event) {

    // Get href value
    var href = $(this).attr('href');
    // Remove href hash
    var noHash = href.split('#')[0];
    
    // check if href has a path, if not prevent default click behavior
    if (noHash == "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
        
      var targetOffset = $(hash).offset().top-105;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: targetOffset
      }, 950, 'swing'
      );

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    }

    // Else don't prevent default behavior
    else {}
    });
  });
