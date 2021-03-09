$(function(){

     $("button:nth-child(2)").click(function(){

        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

     });


});
