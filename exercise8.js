function pasanganTerbesar(num) {
    terbesar = 0;
    temp = num.toString();
    
    for (let i = 0; i < temp.length - 1; i++) {
        if (i === 0){ 
            terbesar = temp[i] + temp[i+1];
        }
        var pasangan = Number(temp[i] + temp[i+1])
        if (terbesar < pasangan){
            terbesar = pasangan ;
        } 
    }
    return (terbesar)/1;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99