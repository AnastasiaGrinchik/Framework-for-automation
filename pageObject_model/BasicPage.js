import { elementToBeClickable } from 'wdio-wait-for';

export class BasicPage {
    constructor() {}

    async openPage(url) {
        await browser.setTimeout({
            pageLoad: 15000,
            implicit: 15000,
            script: 15000,
        });
        await browser.url(url);
        await browser.maximizeWindow();
    }

    async openAndSwitchNewTab(url) {
        await browser.newWindow(url);
        await browser.switchWindow(url);
    }

    async switchTab(url) {
        await browser.switchWindow(url);
    }

    async enterFrame(frameXpath) {
        let frame = await browser.$(frameXpath);
        await browser.switchToFrame(frame);
    }

    async exitFrame() {
        await browser.switchToParentFrame();
    }

    async waitUntilElementToBeClickable(el) {
        await browser.waitUntil(elementToBeClickable(el), {
            timeout: 20000,
            timeoutMsg: 'Failed, after waiting for the element to be clickable',
        });
    }
}

export let BrowsersDriver = new BasicPage();
