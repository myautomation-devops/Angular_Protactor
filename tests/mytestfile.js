let xlsobj = require('../excelutils/readfile');
let callbrowser = require('../pages/openBrowser');
let getobjlocator = require('../tests/getElementLocator');
describe('Login Module', function(){
    it('Enter no inputs', function(){
//    callbrowser.openBrowser();
     let getobj = xlsobj.data.getWorkSheet();
   let arr =[];
     console.log(arr.push(getobj[sheetRows]));
     console.log(arr); 
 
    });
});