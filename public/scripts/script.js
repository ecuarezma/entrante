$(document).ready(()=>{
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



$('a').click(function(){
  $('a').removeClass('selected');
  $(this).toggleClass('selected');
})

  $(() => {
      $(document).scroll(() => {
        const $navLinks = $("#mainNavbar, .nav-link");
        $navLinks.toggleClass("scrolled", $(this).scrollTop() > $navLinks.height());
      });
    });

$('.navbar-brand, .nav-link').click(event => {
  const id = event.target.id;
  $('.container').fadeOut(400)
  .promise().done(
    () => $(`#${id}Page`).fadeIn(400));
  })
})