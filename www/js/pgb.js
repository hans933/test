function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

jQuery.getJSON("deputies.json", function(result){
	$.each(result, function(i, row){
		$('#deputiesList').append('<li><a href="">' + row.deputy_name + '</a></li>');
	});
	$('#deputiesList').listview('refresh');
});