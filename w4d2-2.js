/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;


function sumArr(nums, x=0) {
    if (x<nums.length){
        return (nums[x]+sumArr(nums, x+1))
    }
    return 0
}

// x=0
// nums[0]=1  +  x=1
//               nums[1]=2  +  x=2
//                             nums[2]=3  +  x=3
//                                           0

console.log(sumArr(nums1))
console.log(sumArr(nums2))                                                          
console.log(sumArr(nums3))


