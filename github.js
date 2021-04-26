require("chromedriver");

let wd = require("selenium-webdriver");
let chrome = require("selenium-webdriver/chrome");
let browser = new wd.Builder().forBrowser('chrome').build();

async function pages(turl){
    let browser = new wd.Builder().forBrowser('chrome').build();
    await browser.get(turl);
}

async function main(){
    await browser.get("https://github.com/topics");
    await browser.wait(wd.until.elementLocated(wd.By.css(".no-underline.d-flex.flex-column.flex-justify-center")));
  let topics = await browser.findElements(wd.By.css(".no-underline.d-flex.flex-column.flex-justify-center"));
   // console.log(topics.length);
  let url = [];

  for(let i in topics){
      url.push(await topics[i].getAttribute("href"));
  }

  for(let ur of url){
      await pages(ur);
  }

}
//f3 color-text-secondary text-normal lh-condensed


main();