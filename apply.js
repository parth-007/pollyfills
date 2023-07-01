let name = {
    fName: "Parth",
    lName: "Mangukiya"
};

let printName = function(hometown, city) {
    console.log(this.fName + " " + this.lName + " " + hometown + " " + city);
}

// printName.call(name, "Surat");

Function.prototype.myApply = function(obj, args) {
    obj.fnRef = this;
    obj.fnRef(...args);
}

printName.myApply(name, ["Surat", "ST"]);