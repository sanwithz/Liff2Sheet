function doPost(e){
  let data = e.parameter;
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([data.name, data.email, "'"+data.phone]);
  return ContentService.createTextOutput("Success");
}
