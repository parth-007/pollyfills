let name = {
    firstName: "Parth",
    lastName: "Mangukiya"
};

let printName = function(hometown, other) {
    console.log(this.firstName + "_" + this.lastName + "_" + hometown +"_" +other);
}

let printMyName = printName.bind(name, "Delhi");
printMyName("Something");

Function.prototype.myBind = function(...args) {
    let obj = this;
    let params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}


let printMyName2 = printName.myBind(name, "Delhi");
printMyName2("Something");