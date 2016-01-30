$(document).ready(function(){
  //console.log("ready");
    
    $('#hideAll').click(function() {
       $('section.entry').hide();

        return false;
    });


    $('#showAll').click(function() {
        $('section.entry').show();
        return false;        

    });
    
// a for loop for each category. called a function with two parameters 
//arguments to .each function is an array and a callback. The indexInArray needs to be there even if it's not used

    var categories=["transit","food","work","panic"];
    $.each(categories,function(i,category){
        $('a#'+category).click(function() {
            $('section.entry').hide();  
            $('section.entry.'+category).show();
            return false;
        });

    });

});

