const loadMeals=(search)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data=>displayMeals(data.meals))
}

const displayMeals= meals =>{
    
    const mealsContainer=document.getElementById('meal-container')
    mealsContainer.innerHTML=``
 meals.forEach(meal =>{
    const mealDiv=document.createElement('div')
    mealDiv.classList.add('col')
    mealDiv.innerHTML=`
    <div class="card">
                <img onclick="loadFoodDetails(${meal.idMeal})" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
              </div>
    
    `
    mealsContainer.appendChild(mealDiv)
})

}

const searchFood=()=>{
  const searchFood=document.getElementById('search-field')
  const searchText=searchFood.value
  loadMeals(searchText)
  searchFood.value=''
}

const loadFoodDetails=(idMeal)=>{
const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res=>res.json())
.then(data=> displayFoodDetails(data.meals[0]))
}

const displayFoodDetails =(meal)=>{
  // console.log(meals)
  const foodDetails=document.getElementById('display-food')
  foodDetails.innerHTML=  ``
    const mealDetailsDiv=document.createElement('div')
    mealDetailsDiv.classList.add('card')
    mealDetailsDiv.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
    
    `
    foodDetails.appendChild(mealDetailsDiv)

}
// loadMeals()


