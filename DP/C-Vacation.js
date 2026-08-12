function vacation(happiness) {
  let n = happiness.length;
  let dp = Array.from({ length: n }, () => Array(4).fill(-1));
  function solve(day, lastactivity) {
  

    let max = 0;
    if (day === n) return 0;
    if(dp[day][lastactivity] !== -1) return dp[day][lastactivity];
    for (let activity = 0; activity < happiness[0].length; activity++) {
      if (lastactivity !== activity) {
        max = Math.max(
          max,
          happiness[day][activity] + solve(day + 1, activity),
        );
      }
    }

    return dp[day][lastactivity] = max;
  }

  return solve(0, 3);
}

const happiness = [
  [17, 2, 17],
  [21, 16, 5],
  [20, 3, 19],
];

console.log(vacation(happiness));
