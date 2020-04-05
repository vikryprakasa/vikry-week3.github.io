// Tantangan Array 3(Array Join, Split,Slice,Splice,Sort)

input = ['0001','Roman Alamsyah','Bandar Lampung','21/05/1989','Membaca']
function dataHandling2(){
    var input1 = input
    input1.splice(1,2,"Roman Alamsyah Elsharawy",'Provinsi Bandar Lampung')
    input1.splice(4,2,"Pria","SMA Internasional Metro")
    console.log(input1)
   
    var input2 = input1[3]
    tanggal = input2.split("/")
    
    var bulan = tanggal[1]
      switch(bulan){
    case '01':
    console.log( 'January');
    break;
    case '02':
    console.log( 'February');
    break;
    case '03':
    console.log(' March ');
    break;
    case '04':
    console.log(' April ');
    break;
    case '05':
    console.log( ' May ');
    break;
    case '06':
    console.log( 'June');
    break;
    case '07':
    console.log('July');
    break;
    case '08':
    console.log('August');
    break;
    case '09':
    console.log('September ');
    break;
    case '10':
    console.log('October ');
    break;
    case '11':
    console.log(' November ');
    break;
    case '12':
    console.log( ' December ');
    break;  
    default:
    break;
  }
  
  tanggal.sort((function(a,b){return b - a}))
    console.log(tanggal)
  
  tanggalJoin = input2.split('/').join('-')
    console.log(tanggalJoin)
  
  var nama = input1[1]
    console.log(nama.slice(0,15))
  
  }
  dataHandling2()