function reversal(arr){
	let result = []

	for(let i = arr.length - 1 ; i >= 0 ; i--){
		result.push(arr[i])
	}
	return result
}


function generateBoard(num = 10){
	let result =[]
    let store = []
	for(let i = 1; i <= num * num ; i++){
		store.push(i)
		if(store.length % num === 0){
            if(result.length % 2 !== 0){
				store = reversal(store)
			}
			result.push(store)
			store =[]
		}
	}
	return reversal(result)
}



// TEST CASE
console.log(generateBoard())
console.log('=====================================================')
console.log(generateBoard(15))
console.log('=====================================================')
console.log(generateBoard(8))
