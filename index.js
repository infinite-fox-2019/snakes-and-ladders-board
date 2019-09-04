function snakes(num){

    let container = []
    for(let i = 0; i < num*num; i+=num){
        container.push(generateHorizontal(i+1,i+num))
    }   

    for(let i = 0; i < container.length; i++){
        if(i % 2 === 1)container[i] = reverseArr(container[i])
    }

    return reverseArr(container)
    

    function generateHorizontal(start, end){
        let container = []
        for(let i = start; i <= end; i++){
            container.push(i)
        }
        return container
    }
    function reverseArr(arr){
        let container = []
        for(let i = arr.length-1; i >= 0; i--){
            container.push(arr[i])
        }
        return container
    }

}


console.log(snakes(10))

