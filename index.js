function generateBoard(num){
    let arr = []
    let angka = num*num
    let k = 0
    let batas = num
    if (angka % 2 == 0){
        k = 0
    }
    else 
    {
        k = 1
        batas += 1
    }
    for(let i = k ; i < batas ; i++){
        arr.push([])
        if(i % 2 == 0){
            for(let j = 0 ; j < num ; j++){
                arr[arr.length-1].push(angka)
                angka--
            }
        }
        else{
            angka -= num
            for(let j = 0 ; j < num ; j++){
                angka++
                arr[arr.length-1].push(angka)
            }
            angka -= num
        }
        
    }
    return arr
}

console.log(generateBoard(8));
console.log(generateBoard(15));