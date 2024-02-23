
const data = require('../data')


// 4. Store all attractions in an array

let result = data.map((Element)=>{
    
     return Element.attractions
     
})

module.exports=result;