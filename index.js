function generateBoard(width) {
  let indexArr = width
  let num = 1
  let arr = []
  for (let i = 0; i < width; i++) {
    let row = []

    if (i % 2 !== 0) num += width
    for (let j = 0; j < width; j++) {
      if (i % 2 === 0) {
        row.push(num)
        num++
      } else {
        num--
        row.push(num)
      }
    }
    if (i % 2 !== 0) num += width

    indexArr--
    arr[indexArr] = row
  }
  return arr
}

console.log(generateBoard(10))
console.log(generateBoard(8))