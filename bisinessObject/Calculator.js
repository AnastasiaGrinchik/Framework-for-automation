export class Calculator {
    constructor(calculatorParametrs) {
        this.numberOfInstance = calculatorParametrs.numberOfInstance;
        this.operatingSystem = calculatorParametrs.operatingSystem;
        this.machineClass = calculatorParametrs.machineClass;
        this.series = calculatorParametrs.series;
        this.machineType = calculatorParametrs.machineType;
        this.gpuType = calculatorParametrs.gpuType;
        this.numberOfGpus = calculatorParametrs.numberOfGpus;
        this.localSsd = calculatorParametrs.localSsd;
        this.datacenter = calculatorParametrs.datacenter;
        this.commitedUsage = calculatorParametrs.commitedUsage;
    }
}
