
import{test,expect} from '../fixtures/test-fixture'

test.beforeEach("urlload",async({page})=>{
    
    await page.goto("/member/myhome/");
   
});
test("prpertyverify",async({page,homepage})=>{
    
    await expect (homepage.mypropertytextverification).toHaveText("My Properties");
})
test("logovisi",async({page,homepage})=>{
    await expect (homepage.logovisibility).toBeVisible();
})
test("nameveri",async({page,homepage})=>{
    await expect (homepage.nameverification).toHaveText("Rugma");
})
test("accountveri",async({page,homepage})=>{
    await expect (homepage.myaccounttext).toHaveText("My Account");
})
test("accountverify",async({page,homepage})=>{
    await  homepage.myaccounttext.click();
})
