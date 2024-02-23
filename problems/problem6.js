// 6. Write a function that should take foodItem as a param and return which city has that foodItem in their famousFood list.


function foodItems(array,item){
    let cityThatHasFood=[]
  array.forEach(element => {
    if(element.famousFood.includes(item)){
        cityThatHasFood.push(element.city);
    }
  });
   return cityThatHasFood;
}

module.exports=foodItems;