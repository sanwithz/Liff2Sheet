function doPost(e) {
  if (!e.parameters.name) {
    return message("Error: Bad parameters");
  } else {
    saveDataToSheet(e.parameters.name[0]);
    return message("Completed! ปิดหน้านี้ได้เลยครับ");
  }
}

function saveDataToSheet(name) {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([name]);
}

function message(msg) {
  return ContentService.createTextOutput(JSON.stringify({ result: msg })).setMimeType(ContentService.MimeType.JSON);
}
