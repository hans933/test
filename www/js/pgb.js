function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

var db;


function onDeviceReady() {
	navigator.notification.beep(1);
	copyDatabaseFile('baza.db').then(function () {
	  // success! :)
	}).catch(function (err) {
	  // error! :(
	  console.log(err);
	});
	var db = window.sqlitePlugin.openDatabase({name: "baza.db"});
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

function copyDatabaseFile(dbName) {
  var sourceFileName = cordova.file.applicationDirectory + 'www/' + dbName;
  var targetDirName = cordova.file.dataDirectory;
  return Promise.all([
    new Promise(function (resolve, reject) {
      resolveLocalFileSystemURL(sourceFileName, resolve, reject);
    }),
    new Promise(function (resolve, reject) {
      resolveLocalFileSystemURL(targetDirName, resolve, reject);
    })
  ]).then(function (files) {
    var sourceFile = files[0];
    var targetDir = files[1];
    return new Promise(function (resolve, reject) {
      targetDir.getFile(dbName, {}, resolve, reject);
    }).then(function () {
      console.log("file already copied");
    }).catch(function () {
      console.log("file doesn't exist, copying it");
      return new Promise(function (resolve, reject) {
        sourceFile.copyTo(targetDir, dbName, resolve, reject);
      }).then(function () {
        console.log("database file copied");
      });
    });
  });
}

