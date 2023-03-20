"use strict";
class A {
    //data members
    getInfo() {
        console.log("hello");
    }
}
class B {
    getInfos() {
        console.log("child is called");
    }
}
let data = new B();
data.getInfo();
