let xlsobj = require('../excelutils/readfile');
class getElementLocator{
// getJsonData(){
// let jsonobj = xlsobj.data.getJson();
// jsonobj.forEach(function(data){
// let typeofLocator = data.LocatorType;
// if (typeofLocator=='id'){
//     callByid(setid);
// }
// if (typeofLocator=='class'){
//     callBycls(setcls);
// }
// return typeofLocator;
// });
// };
callByid(setid){
      let getid = element(by.id(setid));
      return getid;
};

callBycls(setcls){
    
          let getcls = element(by.className(setcls));
          return getcls;
       };
};
module.exports = new getElementLocator();