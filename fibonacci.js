const getFibonacciNumber = (num) => {
    if (num === 0) return 0;
    if (num === 1) return 1;

    return getFibonacciNumber(num - 1) + getFibonacciNumber(num - 2);
}
