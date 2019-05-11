$('a').click(function(){
   $('a').removeClass('selected');
   $(this).toggleClass('selected');
})

$('[data-fancybox="images"]').fancybox({
    buttons : [ 
      'zoom',
      'fullScreen',
      'close'
    ],
    thumbs : {
      autoStart : false
    },
    protect : true
  });

  $.fancybox.defaults.animationEffect = "fade";

  $(function () {
      $(document).scroll(function(){
        var $navLinks = $("#mainNavbar, .nav-link");
        $navLinks.toggleClass("scrolled", $(this).scrollTop() > $navLinks.height());
      });
    });

$('.navbar-brand, .nav-link').click(function(event){
    var id = event.target.id;
    $('.container').fadeOut(400);
    $('.container').promise().done(function(){
        $('#' + id + 'Page').fadeIn(400);
    })
})

// $('.nav-link').click(function(event){    
//     var id = event.target.id;
//     console.log('id = ' + id); 
// });