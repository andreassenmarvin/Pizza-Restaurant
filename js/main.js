// Navbar transition on window scroll
$(function () {
    var navbar = document.getElementById("navbar");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(navbar).css("background-color", "white").css("top", 0);
            $(navbar).addClass("navbar-animate");
            $("#nav-title").show();
            $(".navbar-brand").removeClass("brand-auto");
            $(".navbar-brand").addClass("brand-left");
        } else {
            $(navbar).css("background-color", "transparent").css("top", 0);
            $("#nav-title").hide();
            $(".navbar-brand").removeClass("brand-left");
            $(".navbar-brand").addClass("brand-auto");
        }
    })

    $("#menu-bar").click(function () {
        $(".nav-menu").slideDown();
        $("#menu-bar").fadeOut();
        $("#menu-hide").fadeIn();
        $(".navbar-brand").removeClass("brand-auto");
        $(".navbar-brand").addClass("brand-menu");
        $(".body-overlay").fadeIn();
    })

    $("#menu-hide").click(function () {
        $(".nav-menu").slideUp();
        $("#menu-bar").fadeIn();
        $("#menu-hide").fadeOut();
        $(".navbar-brand").removeClass("brand-menu");
        $(".navbar-brand").addClass("brand-auto");
        $(".body-overlay").fadeOut();
    })

    $("#nav-menu-links li").click(function () {
        $(".nav-menu").fadeOut();
        $("#menu-bar").fadeIn();
        $("#menu-hide").fadeOut();
        $(".body-overlay").fadeOut();
        $(".navbar-brand").removeClass("brand-menu");
        $(".navbar-brand").addClass("brand-left");
    })
})