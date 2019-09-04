/* check 1 buat papan 10x10 */

function generateBoard(num){

    let base = []
    let kalkulasi = num*num
    for(let i=num; i>0; i--){
        
        let row = []
        if(i%2!==0){
            for(let j=num-1; j>=0; j--){
                row[j]=kalkulasi
                kalkulasi --   
            }
        }else{
            for(let j=0; j<num; j++){
                row[j]=kalkulasi
                kalkulasi --
            }
        }
        base.push(row)  
    }
    return base
}

console.log(generateBoard(10))