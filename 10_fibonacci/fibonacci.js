const fibonacci = function (nthMemberFibonacci) {
    if (nthMemberFibonacci < 0) {
        return "OOPS";
    } else {
        let nthInFibo = Number(nthMemberFibonacci);
        let f0 = 0;
        let f1 = 1;
        let fibo = [f0, f1];

        for (let i = 2; i <= nthInFibo; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo[nthInFibo];
    }
};

// Do not edit below this line
module.exports = fibonacci;
