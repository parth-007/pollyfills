const numbers = [1,2,3,4];

const double = (x) => x*2;


const result = numbers.map(double);
// console.log(result);

Array.prototype.myMap = function(callback, thisArgs) {
    let arr = this;
    let result = [];
    for(let i=0; i<arr.length; i++) {
        result[i] = callback.call(thisArgs, arr[i]);
    }
    return result;
}

const result2 = numbers.myMap(double);
console.log(result2);