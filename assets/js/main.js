$(document).ready( function() {
  $('img').hide();
})

$(window).load(function() {
  $('img').each(function() {
    $(this).hide();

    if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
      // image was broken, replace with your new image
      $(this).hide();
    } else {
      $(this).fadeIn("slow");
    }
  });
});
