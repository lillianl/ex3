$(document).ready(function() {
  //console.log("ready");
    
$('#hideAll').click(function() {
   $('section#entry h2, section#entry img, section#entry ul').hide();

$('#showAll').click(function() {
    $('section#entry h2, section#entry img, section#entry ul').show();

    return false; 
});  
    
    
}
                  
