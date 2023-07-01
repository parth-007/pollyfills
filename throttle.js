function throttle(fn, delay) {
  let isThrottled = true;
  return function () {
    if (isThrottled) {
      fn.apply(this, arguments);
      isThrottled = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  }; 
}
