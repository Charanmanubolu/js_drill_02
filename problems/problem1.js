
// 1. Store all country names in array.

const data = require("../data")

let result = data.map((Element,index,Array)=>{
    return Element.country;
})

module.exports=result;