function uploadData() {

  // Step 1: Set GA account informations
  var accountId = "YOUR_ACCOUNT_ID";
  var webPropertyId = "YOUR_WEB_PROPERTY_ID";
  var customDataSourceId = "YOUR_CUSTOM_DATA_SOURCE_ID";
  
  // Step 2: Generate CSV string from spreadsheet active range(s)
  var csvToUpload = "YOUR_CSV_DATA_MATCHING_THE_DATA_SOURCE_PATTERN";
  
  // Step 3: Set blob object to send
  var blobData = Utilities.newBlob(csvToUpload, "application/octet-stream", "GA import data");
  
  // Step 4: Send data to GA
  try {
    var upload = Analytics.Management.Uploads.uploadData(accountId, webPropertyId, customDataSourceId, blobData);
    SpreadsheetApp.getUi().alert("Uploading: OK");
  }
  catch(err) {
      SpreadsheetApp.getUi().alert("Cannot uploading: Failed");
  }
}