function generateBoard(num) {
  let res = []
  let totalSquares = num*num

  if (num % 2 === 0) {
    for (let i = 0; i < num; i++) {
      res.push([])
      if (i % 2 === 0) {
        for (let j = 0; j < num; j++) {
          res[i].push(totalSquares)
          totalSquares--
        }
      }
      else {
        for (let k = num-1; k >= 0; k--) {
          res[i][k] = totalSquares
          totalSquares--
        }
      }
    }
  }
  else {
    for (let i = 0; i < num; i++) {
      res.push([])
      res
      if (i % 2 === 0) {
        for (let j = num-1; j >= 0; j--) {
          res[i][j] = totalSquares
          totalSquares--
        }
      }
      else {
        for (let k = 0; k < num; k++) {
          res[i].push(totalSquares)
          totalSquares--
        }
      }
    }
  }
  return res
}

console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));