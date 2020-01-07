$(document).ready(function () {
    var wrap = $("#wrap");

    wrap.on("scroll", function(e) {
        
      if (this.scrollTop > 147) {
        wrap.addClass("fix-nav");
      } else {
        wrap.removeClass("fix-nav");
      }
      
    });
});