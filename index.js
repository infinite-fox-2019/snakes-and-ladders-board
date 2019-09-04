function generateBoard (input){
    let result = []
    let calculate = input * input; 
    for(let i=input; i>0; i--){
        let arr = [];
        if(i%2!==0){
            for(let j=input-1; j>=0; j--){
                arr.push(calculate);
                calculate--
            }
        }else{
            for(let j=0; j<input; j++){
                arr.push(calculate);
                calculate--
            }
        }
        result.push(arr);
    }
    return result
}

console.log(generateBoard(8));