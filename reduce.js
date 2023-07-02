const numbers = [1,2,3,4];

const result = numbers.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

// console.log(result);

Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;
    let acc = initialValue === undefined ? undefined : initialValue;

    for(let i=0; i<arr.length; i++) {
        acc = acc === undefined ? arr[i] : callback(acc, arr[i]);
    }
    return acc;
}

const r2 = numbers.myReduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(r2);
