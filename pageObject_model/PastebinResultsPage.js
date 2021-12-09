import { titleContains } from 'wdio-wait-for';
import { PastebinHomePage } from './PastebinHomePage.js';

export class PastebinResultsPage extends PastebinHomePage {
    constructor() {
        super();
        this.savedTitleXpath = '//div[@class="info-top"]/h1';
        this.savedTextAreaXpath = '//div[@class="source"]/ol';
        this.savedExpirationXpath = '//div[@class="expire"]';
        this.savedSyntaxXpath = '//a[@class="btn -small h_800"]';
    }

    async findOutTitleBrowsertab() {
        await browser.waitUntil(
            titleContains('how to gain dominance among developers'),
            {
                timeout: 20000,
                timeoutMsg:
                    'Failed, after waiting the element does not contain the same title',
            }
        );
        this.titleBrowserTab = await browser.getTitle();
    }

    async pushSavedText(object, key, fieldXpath) {
        let field = await browser.$(fieldXpath);
        field = await field.getText();
        object[key] = await field;
    }

    async transformText(obj, key, text) {
        text = await text.replace(/\s+/gi, '');
        text = await text.replace(/\\n/gi, '');
        text = await text.toLowerCase();
        obj[key] = await text;
    }
}

export let PastebinResults = new PastebinResultsPage();
