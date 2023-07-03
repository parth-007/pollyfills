const numbers = [1,2,3,4,5];

const msg = x => {
    console.log("Got:", x);
}

numbers.forEach(msg);

Array.prototype.myForEach = function(callback, thisArgs) {
    for(let ele of this) {
        callback.call(thisArgs, ele);
    }
}

numbers.myForEach(msg)