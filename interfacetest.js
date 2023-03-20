"use strict";
class A {
    getInfo() {
        console.log("hello");
    }
    getNumber() {
        console.log("number");
    }
}
class B extends A {
}
let b = new B();
b.getNumber();
