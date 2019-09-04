function snake_boards(row,col){
    let arr = []
    let count = row * col
    for(let i = row ; i > 0 ;i--){
        let temp = []
        arr.push(temp)

        if(i % 2 !== 0){
            for(let j = col-1; j >= 0; j--){
                temp[j] = count
                count--
            }
        } else {
            for(let j = 0; j <= col-1; j++){
                temp[j] = count
                count--
            }
        }
    }
    return arr
}

console.log(snake_boards(10,10));
