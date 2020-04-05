// Tantangan Array 1
function balikKata(kata){
  kataBalik=''
  for( i = kata.length - 1; i >= 0; i--){
    kataBalik = kataBalik + kata[i]
  }
  return kataBalik
}
console.log(balikKata('Hello World!'))


