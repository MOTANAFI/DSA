// Two sum
// imaging you have a list of numbers and a target number.Your job
//is to find two numbers in that list that add up to the target number.
// You also need to tell which position (or inexes) those two numbers ar at in the list

// example 
//if the list is [2,7,11,15] and the target is 9,
// the answer would be [0,1] because 2 (at index 0) plus 7 (at index 1) equals 9;


const twoSum = (nums, target) => {
    // loop throught each number in the list 
    for(let i=0; i<nums.length; i++){
        // loop through the rest of the numbers in the list
        for(let j=i+1; j<nums.length; j++){
            // if the sum of the current number and the next number equals the target
            if(nums[i] + nums[j] === target){
                // return the indexes of the numbers that add up to the target
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]