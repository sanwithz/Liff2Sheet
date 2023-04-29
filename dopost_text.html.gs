function doPost(e) {
  if (!e.parameters.filename || !e.parameters.file || !e.parameters.name) {
    return message("Error: Bad parameters");
  } else {
    var data = Utilities.base64Decode(e.parameters.file, Utilities.Charset.UTF_8);
    var blob = Utilities.newBlob(data, MimeType.PNG, e.parameters.filename);
    var file = DriveApp.createFile(blob);
    var fileUrl = file.getUrl();

    saveFileUrlToSheet(e.parameters.name[0], fileUrl);
    return message("completed | ปิดหน้านี้ได้เลยครับ");
  }
}


function saveFileUrlToSheet(name, fileUrl) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([name, fileUrl]);
}


function message(msg) {
  return ContentService.createTextOutput(JSON.stringify({ result: msg })).setMimeType(ContentService.MimeType.JSON);
}
