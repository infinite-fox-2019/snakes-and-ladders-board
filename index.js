function generateBoard (input){
    let result = []
    let calculate = input * input; 
    for(let i=input; i>0; i--){
        let arr = [];
        result.push(arr);
        if(i%2!==0){
            for(let j=input-1; j>=0; j--){
                arr[j] = calculate;
                calculate--
            }
        }else{
            for(let j=0; j<input; j++){
                arr[j] = calculate;
                calculate--
            }
        }
    }
    return result
}

console.log(generateBoard(8));