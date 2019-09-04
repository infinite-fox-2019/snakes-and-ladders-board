function snakesAndLadders(num) {
    let result = [];
    let numbers = num * num;
    for (let i = 0; i < num; i++) {
        result.push([]);
        for (let j = 0; j < num; j++) {
            result[i].push(numbers);
            numbers--;
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (num % 2 === 0) {
            if (i % 2 != 0) {
                for (let j = 0; j < result[i].length; j++) {
                    for (let k = j + 1; k < result[i].length; k++) {
                        if (result[i][j] > result[i][k]) {
                            [result[i][j],result[i][k]] = [result[i][k],result[i][j]];
                        }
                    }
                }
            }
        } else {
            if (i % 2 === 0) {
                for (let j = 0; j < result[i].length; j++) {
                    for (let k = j + 1; k < result[i].length; k++) {
                        if (result[i][j] > result[i][k]) {
                            [result[i][j],result[i][k]] = [result[i][k],result[i][j]];
                        }
                    }
                }
            }
        }
    }
    return result;
}
console.log(snakesAndLadders(10));

