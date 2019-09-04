function generateBoard (num) {
    let jmlNum = num * num;
    let result = [];
    for (let i = 0; i < num; i++) {
        let temp = [];
        if (i % 2 === 0) {
            for (let j = 0; j < num; j++) {
                temp[j] = (jmlNum);
                jmlNum--
            }
        } else {
            for (let j = num-1; j >= 0; j--) {
                temp[j] = (jmlNum);
                jmlNum--
            }
        }
        result.push(temp);
    }
    return result;
};
//sudah dinamis
console.log(generateBoard(8));