import { elementToBeClickable } from 'wdio-wait-for';
import { BasicPage } from './BasicPage.js';

export class GoogleCloudHomePage extends BasicPage {
    constructor(driver) {
        super(driver);
        this.urlGoogleCloudHome = 'https://cloud.google.com';
        this.searchButtonXpath =
            '//input[@class="devsite-search-field devsite-search-query"]';
        this.linkCalculatorXpath =
            '//*[@data-ctorig="https://cloud.google.com/products/calculator"]/b';
        this.linkCalculatorPage =
            'https://cloud.google.com/products/calculator';
    }

    async openCalculator() {
        let searchButton = await browser.$(this.searchButtonXpath);
        await this.waitUntilElementToBeClickable(searchButton);
        await searchButton.click();
        await searchButton.setValue('Google Cloud Platform Pricing Calculator');
        await browser.keys('Enter');

        try {
            let linkCalculator = await browser.$(this.linkCalculatorXpath);
            await this.waitUntilElementToBeClickable(linkCalculator);
            await linkCalculator.click();
        } catch (error) {
            if (error) {
                await this.openPage(this.linkCalculatorPage);
            } else {
                throw error;
            }
        }
    }
}

export let GoogleCloudHome = new GoogleCloudHomePage();
