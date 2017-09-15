$(document).ready(function(){
   var $root = $('html, body');
    $('a').click(function(e) {
         var target = this.hash;
         var $target = $(target);
         if($target.length > 0){
             e.preventDefault(); 
             $("html,body").animate({
                 'scrollTop': $target.offset().top
             }, 1000, 'swing', function(){
                 window.location.hash = target;
             });
         }
    });
 });