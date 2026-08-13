/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // recursion + memoization

  let n = prices.length;
  let dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: 2 }, () => Array(3).fill(-1)),
  );

  // function solve(day, isHolding, completedTransaction){
  //     if(day == n) return 0;
  //     let profit = 0;
  //     if(dp[day][isHolding ? 1 : 0][completedTransaction] !== -1) return dp[day][isHolding?1:0][completedTransaction];

  //     if(isHolding){
  //         profit = Math.max(prices[day] + solve(day+1, false,completedTransaction + 1), solve(day+1, true,completedTransaction))
  //     }else{
  //         if(completedTransaction < 2){
  //         profit = Math.max(-prices[day] + solve(day + 1, true, completedTransaction), solve(day+1, false, completedTransaction))

  //         }
  //     }

  //     return dp[day][isHolding ? 1 : 0][completedTransaction] = profit;

  // }

  // return solve(0, false, 0)

  // tabulation

  dp[n][0][0] = 0;
  dp[n][0][1] = 0;
  dp[n][0][2] = 0;
  dp[n][1][0] = 0;
  dp[n][1][1] = 0;
  dp[n][1][2] = 0;

  for (let day = n - 1; day >= 0; day--) {
    for (let hold = 0; hold <= 1; hold++) {
      for (let isCompleted = 0; isCompleted <= 2; isCompleted++) {
        if (hold == 0) {
          if (isCompleted < 2) {
            dp[day][hold][isCompleted] = Math.max(
              -prices[day] + dp[day + 1][1][isCompleted],
              dp[day + 1][0][isCompleted]
            );
          } else {
            dp[day][hold][isCompleted] = dp[day + 1][0][isCompleted];
          }
        } else {
          if (isCompleted < 2) {
            dp[day][hold][isCompleted] = Math.max(
              prices[day] + dp[day + 1][0][isCompleted + 1],
              dp[day + 1][1][isCompleted]
            );
          } else {
            dp[day][hold][isCompleted] = dp[day + 1][1][isCompleted];
          }
        }
      }
    }
  }
  return dp[0][0][0];
};

let prices = [3, 3, 5, 0, 0, 3, 1, 4];
console.log(maxProfit(prices));
