function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

var db;


function onDeviceReady() {
	navigator.notification.beep(1);
	window.plugins.sqlDB.copy("baza.db", 0, success, error);
	var db = window.sqlitePlugin.openDatabase("baza.db");
	db.transaction(queryDB);
}

function queryDB(dp) {
	var sql = ('SELECT deputy_id, deputy_name, birth_date, education, degree, profession, party_name, party_shortcut FROM Deputies WHERE activity=1')
	dp.executeSQL(sql, [], querySuccess);
}

function querySuccess(dp, results) {
    var htmlString = '';
    var len = results.rows.length;
    for(var i=0; i<len; i++) {
    htmlString += '<li>test</li>';
    }
    $('#deputiesList').html(htmlString);
}

