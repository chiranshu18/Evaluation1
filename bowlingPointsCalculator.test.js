const getBowlingPoints = require('/.bowlingPointsCalculator')

describe('Caclculate the points of a bowling game', ()=>{
    it('should return the final score when all frames get less than 10 points', ()=>{
        expect(getBowlingPoints([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90)
    })

    it('should return 90 when spare is also present in frames', ()=>{
        expect(getBowlingPoints([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(90)
    })

    
})