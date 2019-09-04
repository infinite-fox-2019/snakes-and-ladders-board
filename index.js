function generateBoard(dimension) {
    let result = [];
    let cellNumber = dimension * dimension;
    let printFromLeft = dimension % 2 === 0;
    for(let i = 0; i < dimension; i++) {
        result[i] = [];
        if(printFromLeft){
            for(let j = 0; j < dimension; j++) {
                result[i][j] = cellNumber;
                cellNumber--;
            }
        } else {
            for(let j = dimension - 1; j >= 0; j--) {
                result[i][j] = cellNumber;
                cellNumber--;
            }
        }
        printFromLeft = !printFromLeft;
    }

    return result
}

console.log(generateBoard(15));
console.log(generateBoard(8));
