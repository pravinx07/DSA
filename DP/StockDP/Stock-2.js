/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // RECURSION + memoization
  // let n = prices.length;
  // function solve(day, isHold){
  //     let profit = 0;
  //     let dp = Array.from({length:n},() => Array(n).fill(-1));
  //     if(day == n) return 0;

  //     if(dp[day][isHold ? 1:0] !== -1) return dp[day][isHold ? 1 : 0];

  //     if(isHold){
  //         // we  have 2 choicse sell or skip
  //         profit = Math.max(prices[day] + solve(day+1, false), solve(day+1, true))
  //     }
  //     else{
  //         // we dont have any stock so we have 2 choices buy it or skipp it
  //         profit = Math.max(-prices[day] + solve(day+1, true), solve(day  +1, false))
  //     }

  //     return dp[day][isHold? 1 : 0] =  profit;

  // }

  // return solve(0, false)

  // Tabultion

  let n = prices.length;
//   let dp = Array.from({ length: n + 1 }, () => Array(2).fill(-1));

//   dp[n][0] = 0;
//   dp[n][1] = 0;

//   for (let day = n - 1; day >= 0; day--) {
//     for (let hold = 0; hold <= 1; hold++) {
//       if (hold == 0) {
//         dp[day][hold] = Math.max(-prices[day] + dp[day + 1][1], dp[day + 1][hold]);
//       } else {
//         dp[day][hold] = Math.max(prices[day] + dp[day + 1][0], dp[day + 1][hold]);
//       }
//     }
//   }
//   return dp[0][0];

  let next = [0, 0];

for (let i = n - 1; i >= 0; i--) {
    let curr = [0, 0];

    // your two transitions
    curr[0] = Math.max(-prices[i] + next[1], next[0])
    curr[1] = Math.max(prices[i] + next[0], next[1])

    // then what?
    next = curr
}
return next[0];
};

let prices = [7, 1, 5, 3, 6, 4];
let prices2 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
console.log(maxProfit(prices2));

/**
 * 
 * Golden Rule (Very Important)

Whenever your recurrence looks like

dp[i] depends on dp[i+1]

Fill

i = n-1 → 0

Whenever your recurrence looks like

dp[i] depends on dp[i-1]

Fill

i = 0 → n-1
 */
