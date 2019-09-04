function generateBoard (num){
    let angkaTotal = num*num;
    let arrTemp = [];
    let arrTotal = [];
    for(let i = 1;i<=angkaTotal;i++){
        arrTemp.push(i);
    }

    function ownSort(arr) {
        for (var i = 0; i<arr.length;i++){
          for (var j = i ; j>=0;j--){
            if (arr[j+1]<arr[j]){
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] =temp;
            }
          }
        }
        return arr
    }
    
    if(num % 2 == 0){
        for(let i = 0;i<num;i++){
            arrTotal.push([]);
            for(let j = 0;j<num;j++){
                arrTotal[i].push(arrTemp[arrTemp.length-1]);
                arrTemp.pop();
            }
            if(i%2==1){
                arrTotal[i] = ownSort(arrTotal[i]);
            }
        }
    } else if(num % 2 == 1){
        for(let i = 0;i<num;i++){
            arrTotal.push([]);
            for(let j = 0;j<num;j++){
                arrTotal[i].push(arrTemp[arrTemp.length-1]);
                arrTemp.pop();
            }
            if(i%2==0){
                arrTotal[i] = ownSort(arrTotal[i]);
            }
        }
    }
    return arrTotal;
}
console.log(generateBoard(8));
console.log(generateBoard(15));