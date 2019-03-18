$("document").ready(function(){
    //rudimentary loop function to go through array of mixes 
    $.getJSON("js/items.json", function(data){
      var mixloop = function(i) {
        if (data.mixes[i]) {
          $("#link").attr("href", data.mixes[i].url).attr("title", data.mixes[i].title);
          $("body").css("background-color", data.mixes[i].bgcolor);
          $("#art").css("background-image", "url(css/"+data.mixes[i].image+")").fadeIn(1).addClass("animated fadeInUp").on("animationend", function(){
            $(this).removeClass('animated fadeInUp');
          });
          $("#art").delay(7500).fadeOut(500);
          if(i == data.mixes.length-1) {i=0;} else {i++;}
          setTimeout(function(){mixloop(i);}, 8000);
        }
    }
    mixloop(0);
  });
});
