$(document).ready(function() {
  $("img#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Grrrr!</li>");
    $("ul#cat").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
    $(this).remove();
    });
  });

  $("img#woof").click(function() {
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
    $(this).remove();
    });
  });
});
