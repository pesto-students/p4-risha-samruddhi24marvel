
const hasDuplicate=arr=>new Set(arr).size!==arr.length;
const bollValue =hasDuplicate([1,5,1,4])// false

console.log(bollValue);