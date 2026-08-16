/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    // recursion + memoization
    let n = prices.length;
    if (n == 0 || k == 0) return 0;
    let dp = Array.from({ length: n }, () => Array.from({ length: 2 }, () => Array(k + 1).fill(-1)))
    // console.log(dp)
    function solve(day, isHold, completedTransactions) {
        let profit = 0;
        if (day === n || completedTransactions == k) return 0;
        let holdIdx = isHold ? 1 : 0;
        if (dp[day][holdIdx][completedTransactions] !== -1) return dp[day][holdIdx][completedTransactions];


        if (isHold) {
            profit = Math.max(prices[day] + solve(day + 1, false, completedTransactions + 1), solve(day + 1, true, completedTransactions))
        } else {


            profit = Math.max(-prices[day] + solve(day + 1, true, completedTransactions), solve(day + 1, false, completedTransactions))

        }
        return dp[day][holdIdx][completedTransactions] = profit;
    }
    return solve(0, false, 0);

};

let prices = [2,4,1]
let k = 2;

console.log(maxProfit(k, prices));
