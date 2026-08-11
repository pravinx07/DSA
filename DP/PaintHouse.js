function painHouse(costs){
const n = costs.length;

if(n===0){
    return 0
}

const dp = Array(n).fill(0).map(()=>Array(3).fill(0))

// Base cases 
dp[0][0] = costs[0][0]
dp[0][1] = costs[0][1]
dp[0][2] = costs[0][2]


for(let i = 1; i < n; i++){
    dp[i][0] = costs[i][0] + Math.min(dp[i-1][1], dp[i-1][2])
    dp[i][1] = costs[i][1] + Math.min(dp[i-1][0], dp[i-1][2])
    dp[i][2] = costs[i][2] + Math.min(dp[i-1][0], dp[i-1][1])
}

return Math.min(dp[n-1][0], dp[n-1][1], dp[n-1][2])
}

const cost = [
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19]
]

console.log(painHouse(cost))