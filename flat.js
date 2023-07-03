const arr = [1, 2, [3, 4], 5, 6, [7, 8, 9, [10, 11, 12, 13]]];

console.log(arr.flat(1));

const res = [].concat(...arr);
console.log(res);

function getDepth(arr) {
  return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(getDepth)) : 0;
}

function myFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele) && depth > 0) {
      result.push(...myFlat(ele, depth - 1));
    } else {
      result.push(ele);
    }
  });
  return result;
}

console.log(myFlat(arr, 3));

console.log(getDepth(arr));
