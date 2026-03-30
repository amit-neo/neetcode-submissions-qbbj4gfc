class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        for(let i = 0;  i < nums.length; i++){
            let prod = 1;
            for (let j = 0; j < nums.length; j++){
                if(j != i){
                     prod *= nums[j]
                }
            }
            result[i] = prod;
        }
        return result;
    }
}
