$(document).ready(function(){
    $("#img1, #img2, #img3, #img4, #img5").click(function(){
        $(this).fadeOut("5000",function(){
            $(this).attr("data-temp", $(this).attr("src"));
            $(this).attr("src", $(this).attr("alt"));
            $(this).attr("alt", $(this).attr("data-temp"));
            console.log(0);
        })
        $(this).fadeIn("5000")
        })
    });