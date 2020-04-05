function tentukanDeretAritmatika(arr) {
    a = 0;
    b = 0;
    for (var i = 0; i <= arr.length-2; i++) {
        a = (arr[i+1] - arr[i]);  
    } 
    for (let j = arr.length-1; 0 < j; j--) {
        b = (arr[j] - arr[j-1]);
    } 
    if (a !== b) {
        return false;
    } else {
        return true;
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  