var xls = require('xlsx');
var methods = {};
var cell = 'B4';

methods.getJson = function(){
    var workbook = xls.readFile(browser.params.filename);
    var worksheet = workbook.Sheets[browser.params.sheetname];
    var getjson = xls.utils.sheet_to_json(worksheet);
    return getjson; 
    // getobj.forEach(function(data){
    //     console.log('Value of cell is '+data.LocKey);

        // console.log('Value of cell '+cell+' is '+worksheet[cell].v);
};
methods.getWorkSheet = function(){
    var workbook = xls.readFile(browser.params.filename);
    var worksheet = workbook.Sheets[browser.params.sheetname];
    return worksheet; 
};
exports.data = methods;


