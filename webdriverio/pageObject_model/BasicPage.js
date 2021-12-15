export class BasicPage {
    constructor() {}

    async openPage(url) {
        await browser.setTimeout({
            pageLoad: 8000,
            implicit: 8000,
            script: 8000,
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
}

export let BrowsersDriver = new BasicPage();
