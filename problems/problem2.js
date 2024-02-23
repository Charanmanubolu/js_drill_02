
// 2. Find the average population among all countries.

const data=require('../data')

let totalPopulation = data.reduce((acc,cr)=>{
    
     return acc+=cr.population
    
},0)
let avgPopulation = totalPopulation/data.length;

module.exports={
    totalPopulation,
    avgPopulation,
}