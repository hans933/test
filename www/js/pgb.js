$(document).ready(function() {
    $.getJSON("https://api.myjson.com/bins/gcw6p",function(result){
      $.each(result, function(i, field){
        $("#deputiesList").append("<li><a href='#'>" + field.deputy_name + "</a></li>");
     });
    });
 });