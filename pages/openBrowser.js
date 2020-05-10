class openBrowser{
    openBrowser() {
    browser.get(browser.params.url);
    browser.sleep(3000);
   };
   stay(waitnumber){
       browser.sleep(waitnumber);
   }; 
};
module.exports =  new openBrowser;