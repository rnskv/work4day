class CommonClass {
    constructor() {
        this.CC_INIT();
    }

    CC_INIT() {
        console.log(`Initialize ${this.constructor.name}`);
    }
}

export default CommonClass;