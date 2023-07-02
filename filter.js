const numbers = [1,2,3,4,5];

const isOdd = x => x%2;

const results = numbers.filter(isOdd);
console.log(results);

Array.prototype.myFilter = function(callback, thisArgs) {
    const arr = this;
    let result = [];
    for(let i=0; i<arr.length; i++) {
        if (callback.call(thisArgs, arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const results2 = numbers.myFilter(isOdd);
console.log(20, results2);