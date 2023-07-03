function showText(text, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, delay);
    });
}

// Promise.all([showText("Hello", 1000), Promise.resolve("done")]).then(res => console.log(res));

function myPromiseAll(promises) {
    let myResult = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then(res => {
                myResult.push(res);
                if (myResult.length === promises.length) {
                    resolve(myResult);
                }
            })
            .catch(err => reject(err));
        });
    });
}

myPromiseAll([showText("Hello", 1000), Promise.resolve("done")]).then(res => console.log(res)).catch(err => console.log(err));