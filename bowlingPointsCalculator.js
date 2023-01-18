function getBowlingPoints(input){
    let score = 0
    for(let i=0; i<input.length-1; i=i+2){
        
        // strike
        if(input[i] == 10){
            score = score + 10 + input[i+1] + input[i+2]
        }

        // spare frame
        else if(input[i]+input[i+1] == 10){
            score = score + 10 + input[i+2]
        }

        // open frame
        else{
            score = score + input[i] + input[i+1]
        }
        
    }
    return score
}

console.log( getBowlingPoints([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]) )
console.log( getBowlingPoints([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) )

module.exports = getBowlingPoints
