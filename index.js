function reverse(str) {
    let reverse = []
    for (let j = str.length - 1; j >= 0; j--) {
        reverse.push (str[j])
    }
    return reverse
}

function ularTangga(num){
    let max = num*num
    let output = []
    for(let i = 0; i<num;i++){
        let out = []
        for(let j = 0; j<num;j++){
            out.push(max)
            max--
        }
          if (i % 2 == 1){
            output.push(reverse(out))
          } else {
            output.push(out)
          }
    }
    return output
}

console.log(ularTangga(10))
console.log(ularTangga(15))
console.log(ularTangga(8))