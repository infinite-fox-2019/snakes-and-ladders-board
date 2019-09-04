function reversing(arr) {
    let output = [];
    for(let i = arr.length-1; i >= 0; i--) {
        output.push(arr[i]);
    }
    return output;
}

function snakeAndLadders(grid) {
    let total = grid*grid;
    let output = [];
    for(let i = 0; i < grid; i++) {
        let tempOutput = [];
        for(let j = 0; j < grid; j++) {
            tempOutput.push(total);
            total--;
        }
        if(grid % 2 === 0) {
            if(output.length % 2 != 0) {
                output.push(reversing(tempOutput));
    
            } else {
                output.push(tempOutput);
            }
        } else {
            if(output.length % 2 == 0) {
                output.push(reversing(tempOutput));
    
            } else {
                output.push(tempOutput);
            }
        }
    }
    return output;
}

console.log(snakeAndLadders(10));