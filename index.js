// function generateBoard() {
//     let output = []
//     for (let i=0; i<10; i++) {
//          output.push([])
//      }
//     let char=1
//     for (let i=10-1; i>=0; i--) {
//         for (let j=10-1; j>=0; j--) {
//             output[i].push(char)
//             char++
//         }
//     }
//     for (let i=0; i<10; i++) {
//         if (i % 2 == 0) {
//             output[i] = sortingManual(output[i])
//         }
//     }
//     return output
// }

// console.log(generateBoard())

function generateBoard(dimensi) {
    let output = []
    for (let i=0; i<dimensi; i++) {
        output.push([])
    }
    let char=1
    for (let i=dimensi-1; i>=0; i--) {
        for (let j=dimensi-1; j>=0; j--) {
            output[i].push(char)
            char++
        }
    }
    if (dimensi % 2 != 0) {
        for (let i=dimensi-1; i>=0; i--) {
            if (i % 2 != 0) {
                output[i] = sortingManual(output[i])
            }
        }
    } else if (dimensi % 2 == 0) {
        for (let i=0; i<dimensi; i++) {
            if (i % 2 == 0) {
                output[i] = sortingManual(output[i])
            }
        }
    }
    return output
}

function sortingManual(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length-1; j++) {
            if (arr[j] < arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(generateBoard(15))
console.log(generateBoard(8))
console.log(generateBoard(10))