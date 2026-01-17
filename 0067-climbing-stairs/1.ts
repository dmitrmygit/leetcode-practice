export {};

function climbStairs(n: number): number {
    let amount2 = Math.floor(n / 2);
    let steps = amount2 + (n % 2);

    let amount2Factorial = 1;
    for (let i = 2; i <= steps; i++) {
        amount2Factorial *= i;
    }
    let stepsFactorial = amount2 === steps ? amount2Factorial : amount2Factorial * steps;
    let minus = amount2 === steps ? 0 : 1;
    let minusFactorial = 1;

    let res = 0;
    while (amount2 >= 0) {
        res += Math.round(stepsFactorial / (amount2Factorial * minusFactorial));
        amount2Factorial = Math.round(amount2Factorial / amount2);
        amount2--;
        steps++;
        stepsFactorial *= steps;
        minus++;
        minusFactorial *= minus;
        minus++;
        minusFactorial *= minus;
    }
    return res;
}
