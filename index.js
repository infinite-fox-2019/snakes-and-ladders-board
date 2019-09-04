function generateBoard(num) {
  const max = num * num;
  let result = [];
  let temp = [];
  let counter = 0;
  for (let i = max; i >= 0; i--) {
    if (counter < num) {
      temp.push(i);
      counter++;
    } else {
      result.push(temp);
      temp = [];
      temp.push(i);
      counter = 1;
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (num % 2 == 0){
      if (i !== 0 && i % 2 !== 0) {
        result[i] = reverseArray(result[i]);
      }
    } else {
      if (i % 2 == 0) {
        result[i] = reverseArray(result[i]);
      }
    }
  }
  return result
}

function reverseArray(arr) {
  let arrReverse = [];
  for (let i = arr.length-1; i >= 0; i--) {
    arrReverse.push(arr[i]);
  }
  return arrReverse;
}

console.log(generateBoard(8));
