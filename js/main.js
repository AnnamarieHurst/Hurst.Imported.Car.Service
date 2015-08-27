$(function(){
    $(".nav a:last-child").addClass("active");
    $(".main-nav .btn").on("click",function(){
        var sector= $(this).attr("href");
        $("#home, #services, #contact, #story").css("z-index", -1);
        $(sector).css("z-index", 0);
    });
    $(".hamburger-menu").on("click", function(){
        $(".main-header ul").slideToggle();
    });
});