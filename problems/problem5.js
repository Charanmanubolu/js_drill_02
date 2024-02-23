const data = require('../data')


// 5. Console log the city names that has Bus transport facility.

let result = data.filter((Element)=>{
    if(Element.publicTransport.includes('Bus')){
        return Element.city
    }
})
.map(Element=> Element.city)


module.exports = result