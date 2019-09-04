function generateBoard(size) {
    let result = [];
    let number = 1;
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            if (i % 2 == 0) {
                row.push(number);
            } else {
                let temp = [];
                for (let k = 0; k <= row.length; k++) {
                    if (k == row.length) {
                        row = [];
                    } else {
                        temp.push(row[k]);
                    }
                }
                row.push(number);
                for (let k = 0; k < temp.length; k++) {
                    row.push(temp[k]);
                }
            }
            number++;
        }
        let temp = [];
        for (let k = 0; k <= result.length; k++) {
            if (k == result.length) {
                result = [];
            } else {
                temp.push(result[k]);
            }
        }
        result.push(row);
        for (let k = 0; k < temp.length; k++) {
            result.push(temp[k]);
        }
    }
    return result;
}

console.log(generateBoard(8));
console.log(generateBoard(10));
console.log(generateBoard(15));