import {test as base,expect} from '@playwright/test';
import { kploginpage } from '../pages/kploginpage';
import { kphomepage } from '../pages/kphomepage';


export const test=base.extend({

    login:async({page},use)=>{
        await use(new kploginpage(page));
    },

     homepage:async({page},use)=>{
        await use(new kphomepage(page));
    },
})
export{expect};