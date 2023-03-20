"use strict";
class info3 {
    constructor() {
        console.log("Called");
    }
    getInfo() {
        console.log("I am getInfo");
    }
    getName() {
        console.log("I am fine");
    }
}
class info4 extends info3 {
    constructor() {
        super();
        console.log("parent");
    }
}
let calledob = new info4();
calledob.getName();
