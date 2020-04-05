function groupAnimals(animals) {
   var kamus= 'abcdefghizklmnopqrstuvwxyz';
   array =[];
   temp =[];

   for(i=0;i < kamus.length; i++){
       for(j = 0; j < animals.length; j++) {
        if(kamus[i] === animals[j][0]) {
          temp.push(animals[j]);
        }
      }
       if(temp.length > 0){
           array.push(temp);
           temp =[];
       }
   }
   return array;

  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]