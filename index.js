function snake_ladders (number) {
    
    let arr_result = []
    let count = number*number;

    if (number % 2 === 0) {
        for (let i = 0; i < number; i++) {
            arr_result.push([])
            if (i % 2 !== 0) {
                for (let j = 0; j < number; j++) {
                    arr_result[i].unshift(count)
                    count--
                }

            } else if (i % 2 === 0) {
                for (let k = number-1; k >= 0; k--) {  
                    arr_result[i].push(count)
                    count--
                }
            }
        }
    } else {
        for (let i = 0; i < number; i++) {
            arr_result.push([])
            if (i % 2 === 0) {
                for (let j = 0; j < number; j++) {
                    arr_result[i].unshift(count)
                    count--
                }

            } else if (i % 2 !== 0) {
                for (let k = number-1; k >= 0; k--) {  
                    arr_result[i].push(count)
                    count--
                }
            }
        }
    }


    return arr_result
    
}

console.log(snake_ladders(15));
