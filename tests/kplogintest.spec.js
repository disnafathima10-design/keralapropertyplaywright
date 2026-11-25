import{test,expect}  from '../fixtures/test-fixture'

test.beforeEach("urlload",async({page})=>{

    await page.goto(process.env.baseurl);
})

test("invalidlogin",async({page,login})=>{
    await login.setValues("fathima@gmail","123");
    await login.loginclick();
    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");

})
test("logovisible",async({login})=>{
    await expect (login.logofield).toBeVisible();
})
test("login navigation",async({page,login})=>{
await login.logoclick();
await expect(page).toHaveURL("https://keralaproperty.in/")
})