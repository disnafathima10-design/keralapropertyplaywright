export class kphomepage{
    /** * @param {import('@playwright/test').Page}page*/
    constructor(page){
        this.page=page;
        this.mypropertytextverification=page.locator(".sub-header");
        this.logovisibility=page.getByRole('img', { name: 'Kerala Property' });
        this.nameverification=page.locator(".fw-bold");
        this.myaccounttext=page.getByRole('link', { name: 'My Account' });
    }

    // async accountverify (){
    //     await this.myaccount.click();
    // }
}