function snakeLadder(size) {
    let board = [];
    let number = 1
    for (let i = 0; i < size; i++) {
        let row = []
        for (let j = 0; j < size; j++) {
            if (i % 2 === 0) {
                row.push(number)
            } else {
                row = [number, ...row]
            }
            number++
        }
        board = [row, ...board]
    }
    return board
}
// console.log(snakeLadder(4));

//VERSI 2

function snakeLadders(size) {
    let result = []
    let count = 0

    for (let i = size - 1; i >= 0; i--) {
        let row = []
        if ((size - i) % 2 === 0) {
            count += size
            for (let j = 0; j < size; j++) {
                row[j] = count
                count--
            }
            count += size
        } else {
            for (let j = 0; j < size; j++) {
                count++
                row[j] = count
            }
        }
        result[i] = row
    }
    return result
}

// console.log(snakeLadders(100));

function printBoard(board) {
    console.log('==============SNAKE & LADDERS==================\n');

    let result = ''
    for (let i = 0; i < board.length; i++) {
        let row = ''
        for (let j = 0; j < board.length; j++) {
            row += `| ${board[i][j]} `
        }
        result += `${row}|\n`
    }

    console.log(result);
    console.log('===============================================');
}

console.log('versi 1');
printBoard(snakeLadder(7))
console.log('\nversi 2');
printBoard(snakeLadders(7))