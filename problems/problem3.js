
// 3. Find which country has more population among all?

const data= require('../data')

let result = data.reduce((acc,cr)=>acc>cr.population ? acc :cr.population ,0)


module.exports=result;