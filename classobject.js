"use strict";
class data {
    constructor() {
        this.name = "";
        console.log("hello");
    }
}
class child extends data {
    constructor() {
        super();
        this.id = "";
        this.data = "";
    }
    getData() {
        console.log(`the  ${this.id} ${this.name},${this.data}`);
    }
}
const ob = new child();
ob.getData();
