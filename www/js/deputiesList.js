document.addEventListener("deviceready",onDeviceReady, false);
var db;


function onDeviceReady() {
	navigator.notification.beep(1);
	var db = window.sqlitePlugin.openDatabase({name: "baza.db"});
	db.transaction(queryDB, transaction_error);
}

function transaction_error(dp, error) {
    alert("Database Error: " + error);
}

function queryDB(dp) {
	var sql = ('SELECT * FROM Deputies WHERE activity=1')
	dp.executeSQL(sql, [], querySuccess);
}

function querySuccess(dp, results) {
    var htmlString = '';
    var len = results.rows.length;
    for(var i=0; i<len; i++) {
    htmlString += '<li>' + results.rows.item(i).deputy_name + '</li>';
    }
    $('#deputiesList').html(htmlString);
}