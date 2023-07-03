const addFive = x => x + 5;
const subTwo = x => x - 2;
const multiFive = x => x * 5;


const compose = (...functions) => {
    return callingValue => {
        return functions.reduceRight((arg, func) => func(arg), callingValue);
    }
}

const val = compose(addFive, subTwo, multiFive);
console.log(val(5));