import '@babel/polyfill';
import { expect } from 'chai';
import { PastebinHome } from '../../../pageObject_model/index.js';

// npx wdio run ./wdio.conf.js --spec task1.spec.js

describe('Function multiply for Calculator', function () {
    before(async function () {
        await PastebinHome.openPage(PastebinHome.urlPastebinHome);
        await PastebinHome.addNewPaste('Hello from WebDriver');

        await PastebinHome.fillSelect(
            PastebinHome.expirationSelectXpath,
            PastebinHome.expirationListXpath,
            PastebinHome.itemXpath,
            '10 Minutes'
        );
        await PastebinHome.addPasteName('helloweb');
        await PastebinHome.sendPaste();
    });
});
