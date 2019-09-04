// Snakes and ladders board
// Dipadana Putu

// Fungsi buatan sendiri untuk reverse
function myReverse(arr){
  let output = []
  for(let i = arr.length-1; i >= 0; i--){
    output.push(arr[i])
  }
  return output;
}

// Main function
function snake(num){
  // Generate angka, lalu di reverse
  let angka = []
  for(let i = 1; i <= (num*num); i++){
    angka.push(i)
  }
  let angkaBalik = myReverse(angka)

  // kelompokkan angka sesuai dengan permintaan
  let angkaArray = [];
  let l = 0;
  for(let j = 0; j < num; j++){
    angkaArray.push([]);
    for(let k = 0; k < num; k++){
      angkaArray[j].push(angkaBalik[l])
      l++;
    }
  }

  // Masukkan angka kedalam array output
  let output = [];
  for(let i = 0; i < num; i++){
    // Jika num adalah angka genap, indeks ganjil di reverse
    if(num%2 == 0){
      if(i%2 != 0){
        output.push(myReverse(angkaArray[i]))
      }
      else{
        output.push(angkaArray[i])
      }
    }
    // Jika num adalah angka ganjil, indeks genap di reverse
    else if(num%2 != 0){
      if(i%2 == 0){
        output.push(myReverse(angkaArray[i]))
      }
      else{
        output.push(angkaArray[i])
      }
    }
  }
  return output;
}

console.log(snake(8))
console.log(snake(10))
console.log(snake(15))