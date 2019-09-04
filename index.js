const generateBoard = n => {
  let totalItem = n * n
  const result = []

  for (let i = 0; i < n; i++) {
    const temp = []
    if (n % 2 != 0) {
      if (i % 2 != 0) {
        for (let j = 0; j < n; j++) {
          temp.push(totalItem)
          totalItem--
        }
        result.push(temp)
      } else {
        totalItem -= n
        for (let j = 0; j < n; j++) {
          temp.push(totalItem + 1)
          totalItem++
        }
        totalItem -= n
        result.push(temp)
      }
    } else {
      if (i % 2 == 0) {
        for (let j = 0; j < n; j++) {
          temp.push(totalItem)
          totalItem--
        }
        result.push(temp)
      } else {
        totalItem -= n
        for (let j = 0; j < n; j++) {
          temp.push(totalItem + 1)
          totalItem++
        }
        totalItem -= n
        result.push(temp)
      }
    }
  }
  return result
}

console.log(generateBoard(15))
console.log(generateBoard(10))
console.log(generateBoard(8))
