function tukar(arr) {
    let res = []
    for (let i=arr.length-1; i>=0; i--) {
        res.push(arr[i])
    }
    return res
}


function generateBoard (n) {
    let number = n*n
    let output = []
    let res = []
    for (let i=0; i<n; i++) {
         res = []
        for (let j=0; j<n; j++) {
            res.push(number)
            number--
            
        }
        if (n % 2 === 0) {
            if (output.length %2 !== 0) {
                output.push(tukar(res))
            } else {
                output.push(res)
            }
        } else {
            if (output.length %2 === 0) {
                output.push(tukar(res))
            } else {
                output.push(res)
            }
        }

        // console.log(res);
    }
    
return output
    
}
let hasil = generateBoard (15)
console.log(hasil);

