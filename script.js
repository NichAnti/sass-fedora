function slide() {
  setInterval(function () {
    $(".disable").removeClass("disable").addClass("preactive");
    setTimeout(function() {
      $(".active").removeClass("active").addClass("disable");
      $(".preactive").removeClass("preactive").addClass("active");
    }, 100)
    
  }, 5000);
}

function init() {
  slide();
}

$(init)
