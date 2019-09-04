function generateBoard(dimension){
  let result = []
  let count = dimension * dimension

  for(let i=0 ; i<dimension ; i++){
    let penampung = []
    let reverseArr = []
    for(let j =0 ; j<dimension ; j++){
      penampung.push(count)
      count --
    }
    if(dimension % 2 ===0){
      if(i % 2 !== 0){
        for(let k = penampung.length-1 ; k>=0 ; k--){
          reverseArr.push(penampung[k])
        }
        result.push(reverseArr)
      } else if (i % 2 === 0){
        result.push(penampung)
      }

      if(count == 0){
        return result
      }
    } else {
      if(i % 2 === 0){
        for(let k = penampung.length-1 ; k>=0 ; k--){
          reverseArr.push(penampung[k])
        }
        result.push(reverseArr)
      } else if (i % 2 !== 0){
        result.push(penampung)
      }

      if(count == 0){
        return result
      }
    }
  }
}

console.log(generateBoard(15))
console.log(generateBoard(10))
console.log(generateBoard(8))

