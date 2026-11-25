import {test as setup,expect} from '@playwright/test';
const authfile ="playwright/auth/auth.json";
setup("authenticate",async ({page})=>{
    await page.goto(process.env.baseurl);
    await page.locator("#ulogin").fill(process.env.kpusername);
    await page.locator("#upass").fill(process.env.kppassword);
    await page.locator('#sub_logbtn').click();
    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");

    await page.context().storageState({path:authfile});
})