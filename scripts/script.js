$(document).ready(function(){
    // $('nav').css({
    //     'display':'none'
    // });
    $('.fa-bars').on('click', function(){
        if($('nav').css('display')==='none'){
            $('nav').css({
                "display":"block"
        })
        }
        else{
            $('nav').css({
                "display":"none",
            "transition":"all 0.3s ease-in-out"
        })
        }
        
 })
});