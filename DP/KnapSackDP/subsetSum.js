function subsetSum(arr, target){
    let n = arr.length;
    let memo = Array.from({length:n}, () => new Array(target+1).fill(-1))
    function solve(index, target){
        if(target == 0) return true;
        if(index === n) return false;
        if(memo[index][target] !== -1) return memo[index][target]
        let take = false;
        let dontTake ;

        if(arr[index] <= target){
         take = solve(index + 1,  target - arr[index])
        }
        dontTake = solve(index + 1, target)
    

        return memo[index][target] = take || dontTake;

    }
    return solve(0,target)

}

let arr = [1,2,3,4]
let target = 5;
console.log(subsetSum(arr, target));
// it is only for positive numbers if negative numbers are present then it will not work
// we need to handle the case when target is negative we can not take negative numbers
// we can use 1 base indexing to solve this problem