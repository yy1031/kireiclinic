$(".faq-item-q").click(function(){
   $(this).find(".faq-item-bar2").toggleClass("is-open")
   $(this).next(".faq-item-a").slideToggle();
})

$('a[href^="#"]').on('click', function(){
   var header = $('header').innerHeight();
   var id = $(this).attr("href");
   var position = 0;
   if (id != '#'){
     var position = $(id).offset().top - header;
   }
   $('html, body').animate({
     scrollTop: position
   },
   350)
 });