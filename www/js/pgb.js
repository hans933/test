function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function showAlert() {
        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
    }

function openDb() {
	var db = null;
	document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			var db = window.sqlitePlugin.openDatabase({name: "db.db"});
			show();
	};
}
function checkDb() {
	document.addEventListener('deviceready', function() {
	  window.sqlitePlugin.echoTest(function() {
	    console.log('ECHO test OK');
	  });
	});
}