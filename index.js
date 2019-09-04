function generateBoard(num) {

let board = [];
let limit = 1;
let number = 1;

for (let i = 0;i<num;i++) {
    let subBoard = [];
    if (number % 2 != 0) {
        for (let j = 0;j<num;j++) {
            subBoard.push(limit);
            limit++
        }
    }else {
        let stop = (limit + num)-1;
        for (let j = 0;j<num;j++) {
            subBoard.push(stop);
            stop--
            limit++
        }
    }
    board.push(subBoard)
    number++
}

let result = [];
for (let i = num-1;i>=0;i--) {
    result.push(board[i])
}

return result;
};

console.log(generateBoard(10))
console.log(generateBoard(15))



















/*
function generateBoard(size) {
  let resultArr = [];
  let index = size * size;

  for (let i = 0; i < size; i++) {
    let tempArr = [];

    if (i % 2 === size % 2) {
      for (let j = 0; j < size; j++) {
        tempArr.push(index);
        index--;
      }
    } else {
      index -= size - 1;

      for (let j = 0; j < size; j++) {
        tempArr.push(index);
        index++;
      }

      index -= size + 1;
    }

    resultArr.push(tempArr);
  }

  return resultArr;
}



*/




