$("input").keypress(function() {
    $("input").css("backgroundColor", "#EBEC90");
   //  console.log(evt.key);
});

$("button").click(function() {
   $("h1").slideUp(1000).slideDown(1000).animate({opacity: 0.5}, 1000);
});