let xlsobj = require('../excelutils/readfile');
let callbrowser = require('../pages/openBrowser');
let getobjlocator = require('../tests/getElementLocator');
describe('Login Module', function () {
  it('Enter no inputs', function () {
    let getobj = xlsobj.data.getWorkSheet();
    callbrowser.openBrowser();
    callbrowser.stay(3000);
    let getclslement = getobjlocator.callBycls(getobj['E6'].v);
    getclslement.click();
    let parsedata = getobjlocator.callBycls(getobj['E7'].v);
    parsedata.getText().then(function (text) {
      expect(text).toContain(getobj['B7'].v);
    });
  });
  it('Enter invalid inputs', function () {
    callbrowser.openBrowser();
    callbrowser.stay(2000);
    let getobj = xlsobj.data.getWorkSheet();
    let getidelement = getobjlocator.callByid(getobj['E3'].v);
    getidelement.sendKeys(getobj['B3'].v);
    let getidelement2 = getobjlocator.callByid(getobj['E4'].v);
    getidelement2.sendKeys(getobj['B4'].v);
    let getclslement = getobjlocator.callBycls(getobj['E6'].v);
    getclslement.click();
    callbrowser.stay(2000);
    let parsedata = getobjlocator.callBycls(getobj['E8'].v);
    parsedata.getText().then(function (text) {
      expect(text).toContain(getobj['B8'].v);
  });
});
});
