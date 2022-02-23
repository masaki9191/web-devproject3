// sp menu
$(".sp-link").click(function() {
    console.log("sdfsd");
    $(this).toggleClass("change");
    $(".c-overlay").toggleClass("change");
});
var coll = document.getElementsByClassName("collapsible");
var i;
//  sp menu item collapsible
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
// sp menu item go 
var width = $(window).width();
$('.header a').on('click', function() {
    var id = $(this).attr("data-id");
    var top = $(id).offset().top;

    if (width > 800) {
        top -= 170;
    }
    $('html, body').animate({
        scrollTop: top
    }, 100);
    return false;
});
// close ad
$('.flo-btn__item-close').on('click', function() {
    $(".flo-btn").css("display", "none");
});