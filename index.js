function numberGeneratorGenap(arr, besarMap) {
    let blok = besarMap * besarMap;
    for(let i = 0; i<arr.length; i++){
        if(i == 0){
            for(let j = blok; j>0; j--){
                if(j <= blok - besarMap){
                break;
                }
                arr[i].push(j);
            }
        }
        else{
            if(i % 2 == 1){
                for(let j = blok - (besarMap * (i + 1)) + 1; j<=blok - (besarMap * i); j++){
                    arr[i].push(j)
                }
            }
            else{
                for(let j = blok - (besarMap * i); j> blok - (besarMap * (i + 1)); j--){
                    arr[i].push(j)
                }
            }
        }
    }
    return arr;
}
function numberGeneratorGanjil(arr, besarMap) {
    let blok = besarMap * besarMap;
    for(let i = 0; i<arr.length; i++){
        if(i == 0){
            for(let j = blok - (besarMap * 1) + 1; j<=blok; j++){
                arr[i].push(j);
            }
        }
        else{
            if(i % 2 == 1){
                for(let j = blok - (besarMap * i); j> blok - (besarMap * (i + 1)); j--){
                    arr[i].push(j)
                }
            }
            else{
                for(let j = blok - (besarMap * (i + 1)) + 1; j<=blok - (besarMap * i); j++){
                    arr[i].push(j)
                }
            }
        }
    }
    return arr;
}

function ularTangga(besarMap) {
    let mapKosong = [];
    let map = [];
    for(let i = 0; i<besarMap; i++){
        mapKosong.push([]);
    }

    if(besarMap % 2 == 0){
        map = numberGeneratorGenap(mapKosong, besarMap);
    }
    else{
        map = numberGeneratorGanjil(mapKosong, besarMap);
    }
    return map;
}

console.log(ularTangga(10));
console.log(ularTangga(11));

