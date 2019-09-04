function generateBoard(numb){
    let result = []
    let maxNumb = numb*numb

    for( let i = 0; i < numb; i++){
        let temp = []
        for( let j = 0; j < numb; j++){
            temp.push(maxNumb)
            maxNumb -=1
        }   
        result.push(temp)
    }

    for(let i = 0; i < result.length; i++){
        if(i % 2 != 0){
            for(let j = 0; j < result[i].length; j++){
                if(result[i][j+1] < result[i][j]){
                    let temp = result[i][j+1]
                    result[i][j+1] = result[i][j]
                    result[i][j] = temp
                    j = -1
                }
            }
        }
    }
    return result
}


console.log(generateBoard(10));
console.log(generateBoard(8));