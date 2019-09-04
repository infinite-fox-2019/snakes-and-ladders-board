function ularTangga(besarMap) {
    let mapKosong = [];

    for(let i = 0; i<besarMap; i++){
        mapKosong.push([]);
    }

    if(besarMap % 2 == 0){
        let blok = besarMap * besarMap;
        for(let i = 0; i<mapKosong.length; i++){
            if(i == 0){
                for(let j = blok; j>0; j--){
                    if(j <= blok - besarMap){
                    break;
                    }
                    mapKosong[i].push(j);
                }
            }
            else{
                if(i % 2 == 1){
                    for(let j = blok - (besarMap * (i + 1)) + 1; j<=blok - (besarMap * i); j++){
                        mapKosong[i].push(j)
                    }
                }
                else{
                    for(let j = blok - (besarMap * i); j> blok - (besarMap * (i + 1)); j--){
                        mapKosong[i].push(j)
                    }
                }
            }
        }
    }
    else{
        let blok = besarMap * besarMap;
        for(let i = 0; i<mapKosong.length; i++){
            if(i == 0){
                for(let j = blok - (besarMap * 1) + 1; j<=blok; j++){
                    mapKosong[i].push(j);
                }
            }
            else{
                if(i % 2 == 1){
                    for(let j = blok - (besarMap * i); j> blok - (besarMap * (i + 1)); j--){
                        mapKosong[i].push(j)
                    }
                }
                else{
                    for(let j = blok - (besarMap * (i + 1)) + 1; j<=blok - (besarMap * i); j++){
                        mapKosong[i].push(j)
                    }
                }
            }
        }
    }
    return mapKosong;
}

console.log(ularTangga(10));
console.log(ularTangga(11));

