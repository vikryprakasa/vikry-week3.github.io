// Exercise 5 Palindrome
function palindrome(kata){
    var temp=''
    formula = kata.length-1
    for(i = formula; i >= 0 ;i--){
      temp += kata[i]
    }if( temp == kata){
        return true
      }
        return false
    
}   
  //TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

  