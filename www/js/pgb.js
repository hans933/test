function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

$(document).ready(function() {
    $.getJSON("deputies.json",function(result){
      $.each(result, function(i, field){
        $("#deputiesList").append('<li><a href="">' + field.deputy_name + '</a></li>');
     });
    });
 });
