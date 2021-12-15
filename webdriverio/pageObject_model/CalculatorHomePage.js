import { elementToBeClickable } from 'wdio-wait-for';
import { GoogleCloudHomePage } from './GoogleCloudHomePage.js';

export class CalculatorHomePage extends GoogleCloudHomePage {
    constructor() {
        super();
        this.urlCalculatorHome = 'https://cloud.google.com/products/calculator';
        this.frameOneXpath = '//*[@id="cloud-site"]/devsite-iframe/iframe';
        this.frameTwoXpath = '//*[@id="myFrame"]';
        this.checkedModeXpath = './/div[@title="Compute Engine"]';
        this.formComputeEngineXpath = '//form[@name="ComputeEngineForm"]';
        this.inputNumberInstancesXpath = '//input[@name="quantity"]';
        this.itemXpath = '//*[@id="select_option_91"]/div[1]';
        this.selectOperatingSystemXpath =
            '//*[@ng-model="listingCtrl.computeServer.os"]/*[@class="md-select-value"]//div';
        this.operatingSystemListXpath = '//*[@id="select_container_89"]';
        this.operatingSystemItemXpath =
            '//md-option/*[contains(text(), "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)")]';
        this.machineClassSelectXpath =
            '//*[@ng-model="listingCtrl.computeServer.class"]/*[@class="md-select-value"]//div';
        this.machineClassListXpath = '//*[@id="select_container_93"]';
        this.machineClassItemXpath = '//*[@id="select_option_90"]/div';
        this.seriesSelectXpath =
            '//*[@ng-model="listingCtrl.computeServer.series"]/*[@class="md-select-value"]//div';
        this.seriesListXpath = '//*[@id="select_container_101"]';
        this.seriesItemXpath = '//md-option/*[contains(text(), "N1")]';
        this.machineTypeSelectXpath =
            '//*[@ng-model="listingCtrl.computeServer.instance"]/*[@class="md-select-value"]//div';
        this.machineTypeListXpath = '//*[@id="select_container_103"]';
        this.machineTypeItemXpath =
            '//md-option/*[contains(text(), "n1-standard-8 (vCPUs: 8, RAM: 30GB)")]';
        this.checkboxXpath =
            '//*[@aria-label="Add GPUs"]/div[@class="md-container md-ink-ripple"]';
        this.numberGrusSelectXpath =
            '//*[@placeholder="Number of GPUs"]/*[@class="md-select-value"]//div';
        this.numberGrusListXpath = '//*[@id="select_container_454"]';
        this.numberGrusItemXpath =
            '//*[@id="select_option_462"]/div[@class="md-text ng-binding"]';
        this.GruTypeSelectXpath = '//*[@aria-label="GPU type"]';
        this.GruTypeListXpath = '//*[@value="NVIDIA_TESLA_K80"]/ancestor::div';
        this.GruTypeItemXpath =
            '//md-option/*[contains(text(), "NVIDIA Tesla V100")]';
        this.localSsdSelectXpath =
            '//*[@placeholder="Local SSD"]/*[@class="md-select-value"]//div';
        this.localSsdListXpath = '//*[@id="select_container_414"]';
        this.localSsdItemXpath = '//md-option/*[contains(text(), "2x375 GB")]';
        this.datacenterSelectXpath =
            '//*[@placeholder="Datacenter location"]/*[@class="md-select-value"]//div';
        this.datacenterListXpath = '//*[@id="select_container_109"]';
        this.datacenterItemXpath = '//*[@id="select_option_236"]/div[1]';
        this.committedUsageSelectXpath =
            '//*[@placeholder="Committed usage"]/*[@class="md-select-value"]//div';
        this.committedUsageListXpath = '//*[@id="select_container_116"]';
        this.committedUsageItemXpath = '//*[@id="select_option_113"]/div';
        this.buttonAddToEstimateXpath =
            '//button[@aria-label="Add to Estimate"]';
    }

    async selectSection() {
        let checkedMode = await browser.$(this.checkedModeXpath);

        await browser.waitUntil(elementToBeClickable(checkedMode), {
            timeout: 10000,
            timeoutMsg: 'Failed, after waiting for the element to be clickable',
        });

        await checkedMode.click();
    }

    async fillInput(data) {
        let formComputeEngine = await browser.$(this.formComputeEngineXpath);

        let inputNumberInstances = await formComputeEngine.$(
            this.inputNumberInstancesXpath
        );

        await inputNumberInstances.setValue(data);
    }

    async fillSelect(selectXpath, selectListXpath, selectItemXpath) {
        let formComputeEngine = await browser.$(this.formComputeEngineXpath);

        let select = await formComputeEngine.$(selectXpath);

        await browser.waitUntil(elementToBeClickable(select), {
            timeout: 10000,
            timeoutMsg: 'Failed, after waiting for the element to be clickable',
        });

        await select.click();

        let selectList = await formComputeEngine.$(selectListXpath);

        let selectItem = await selectList.$(selectItemXpath);

        await browser.waitUntil(elementToBeClickable(selectItem), {
            timeout: 10000,
            timeoutMsg: 'Failed, after waiting for the element to be clickable',
        });

        await selectItem.click();
    }

    async addCheckbox(checkboxXpath) {
        let formComputeEngine = await browser.$(this.formComputeEngineXpath);
        let checkbox = await formComputeEngine.$(checkboxXpath);

        await browser.waitUntil(elementToBeClickable(checkbox), {
            timeout: 10000,
            timeoutMsg: 'Failed, after waiting for the element to be clickable',
        });

        await checkbox.click();
    }

    async fillForm() {
        await this.fillSelect(
            this.selectOperatingSystemXpath,
            this.operatingSystemListXpath,
            this.operatingSystemItemXpath
        );

        await this.fillSelect(
            this.machineClassSelectXpath,
            this.machineClassListXpath,
            this.machineClassItemXpath
        );

        await this.fillSelect(
            this.seriesSelectXpath,
            this.seriesListXpath,
            this.seriesItemXpath
        );

        await this.fillSelect(
            this.machineTypeSelectXpath,
            this.machineTypeListXpath,
            this.machineTypeItemXpath
        );

        await this.addCheckbox(this.checkboxXpath);

        await this.fillSelect(
            this.GruTypeSelectXpath,
            this.GruTypeListXpath,
            this.GruTypeItemXpath
        );

        await this.fillSelect(
            this.numberGrusSelectXpath,
            this.numberGrusListXpath,
            this.numberGrusItemXpath
        );

        await this.fillSelect(
            this.localSsdSelectXpath,
            this.localSsdListXpath,
            this.localSsdItemXpath
        );

        await this.fillSelect(
            this.datacenterSelectXpath,
            this.datacenterListXpath,
            this.datacenterItemXpath
        );

        await this.fillSelect(
            this.committedUsageSelectXpath,
            this.committedUsageListXpath,
            this.committedUsageItemXpath
        );
    }

    async submitForm() {
        let buttonAddToEstimate = await browser.$(
            this.buttonAddToEstimateXpath
        );
        await browser.waitUntil(elementToBeClickable(buttonAddToEstimate));
        await buttonAddToEstimate.click();
    }
}
export let CalculatorHome = new CalculatorHomePage();
