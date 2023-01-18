function getBowlingPoints(input){
    let score = 0

    for(let i=0; i<19; i+2){
        if(input[i] == 10){
            score += 10 + input[i+1] + input[i+2]
        }

        else if(input[i]+input[i+1] == 10){
            score += 10 + input[i+1]
        }

        else{
            score += input[i] + input[i+1]
        }
        
    }
    return score
}

module.exports = getBowlingPoints

// console.log(getBowlingPoints([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))