"use strict";
class info {
    constructor() {
        this.name = "parent";
    }
}
class infocollection extends info {
    constructor(name) {
        super();
        this.name = "child";
        this.name = name;
        // console.log("hello word")
    }
    getName() {
        console.log(this.name);
    }
}
const infocollectionobject = new infocollection("hello");
infocollectionobject.name = "acesss";
infocollectionobject.getName();
