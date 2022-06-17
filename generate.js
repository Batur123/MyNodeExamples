const generate = (max, thecount) => {
    let r = [];
    let decimals = [];
    let currsum = 0;
    for (let i = 0; i < thecount; i++) {
        r.push(Math.random());
        currsum += r[i];
    }

    let remaining = max;
    for (let i = 0; i < r.length; i++) {
        let res = r[i] / currsum * max;
        r[i] = Math.floor(res);
        remaining -= r[i];
        decimals.push(res - r[i]);
    }

    while (remaining > 0) {
        let maxPos = 0;
        let maxVal = 0;

        for (let i = 0; i < decimals.length; i++) {
            if (maxVal < decimals[i]) {
                maxVal = decimals[i];
                maxPos = i;
            }
        }

        r[maxPos]++;
        decimals[maxPos] = 0;
        remaining--;
    }

    return r;
};

let arr = generate(100,4)
console.log(arr);
