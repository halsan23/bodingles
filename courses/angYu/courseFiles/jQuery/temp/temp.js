$("input").keypress(function() {
    $("input").css("backgroundColor", "#EBEC90");
   //  console.log(evt.key);
});

$("button").click(function() {
   $("h1").slideToggle();
});