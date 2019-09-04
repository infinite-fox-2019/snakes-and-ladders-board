
// RELEASE 0
function snakeLadders10(){
    const length = 10*10;
    let arrOut = [];
    let arrIn = [];

    for (let i=1; i<=length; i++){
        arrIn.push(i)
        if (i % 10 === 0){
            arrOut.push(arrIn);
            arrIn = [];
        }
    }
    
    let arrRev = [];
    for (let i=0; i<arrOut.length; i++){
        if (i % 2 !== 0){
            arrRev.push(reverse(arrOut[i]))
        }
        else{
            arrRev.push(arrOut[i])
        }
    }
    arrOut = reverse(arrRev)
    
    return arrOut;
}
console.log(snakeLadders10());

function reverse(arr){
    let arrOut = [];
    for (let i=arr.length-1; i>=0; i--){
        arrOut.push(arr[i]);
    }
    return arrOut;
}

//RELEASE 1
function snakeLadders(dim){
    let length = dim*dim;
    let arrIn = [];
    let arrOut = [];
    for (let i=1; i<=length; i++){
        arrIn.push(i);
        if (i % dim == 0){
            arrOut.push(arrIn);
            arrIn = []
        }
    }
    
    let arrRev = [];
    for (let i=0; i<arrOut.length; i++){
        if (i % 2 !== 0){
            arrRev.push(reverse(arrOut[i]));
        }
        else{
            arrRev.push(arrOut[i]);
        }
    }

    arrOut = reverse(arrRev);
    return arrOut;
}

console.log(snakeLadders(15))
console.log(snakeLadders(8))
console.log(snakeLadders(10))

