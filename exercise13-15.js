function targetTerdekat(arr) {
    let x = -1;
    let o = -1;
    
    for(let i = 0; i < arr.length-1; i++) {
      if (arr[i] == 'o' && i > o) {
        x = i;
      } 
      else if (arr[i] == 'x' && i > x) {
        o = i;
      }
      if (x !== -1 && o !== -1) {
        return Math.abs(x - o)
      }
    }
    
    return 0
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  