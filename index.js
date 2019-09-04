function generateBoards(num){
    var result = []
    var isi = 1
    for(var i=num-1; i>=0; i--){
        result[i] = []
        if(num%2===0){
            if(i%2===1){
                for(var j=0; j<num; j++){
                    result[i][j] = isi
                    isi++
                }
            }else{
                for(var k=num-1; k>=0; k--){
                    result[i][k] = isi
                    isi++
                }
            }
        }else{
            if(i%2===0){
                for(var j=0; j<num; j++){
                    result[i][j] = isi
                    isi++
                }
            }else{
                for(var k=num-1; k>=0; k--){
                    result[i][k] = isi
                    isi++
                }
            }
        }
    }
    return result
}
console.log(generateBoards(8))
console.log(generateBoards(9))