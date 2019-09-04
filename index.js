

function snakeLaddersBoard(num) {
    let output = []
    let count = 0
    for (let i = num - 1; i >= 0; i--) {
        let temp = []
        if ((num - i) % 2) {
            for (let j = 0; j < num; j++) {
                count++
                temp[j] = count
            }
        }
        else {
            count += num
            for (let j = 0; j < num; j++) {
                temp[j] = count
                count--
            }
            count += num
        }

        output[i] = temp
    }

    return output
}



console.log(snakeLaddersBoard(10));
console.log(`\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
console.log(snakeLaddersBoard(15));
console.log(`\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
console.log(snakeLaddersBoard(8));