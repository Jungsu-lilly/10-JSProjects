const meals = document.getElementById('meals');
const favoriteContainer = document.getElementById('fav-meals');

getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {    // meal db에서 데이터를 불러옴.


   const resp = await fetch
   ('https://www.themealdb.com/api/json/v1/1/random.php');

   const respData = await resp.json();

   const randomMeal = respData.meals[0];
   addMeal(randomMeal, true);
}


function addMeal(mealData, random = false){   // 불러온 음식 데이터를 화면에 출력하는 함수

    const meal = document.createElement('div'); // 'div'의 HTML 요쇼를 만들어 반환.
    meal.classList.add('meal'); // meal 클래스 추가.

    meal.innerHTML = `
        <div class="meal-header">
            ${
                random ? `
            <span class="random"> Random Recipe 
            </span>` 
                : ''
            }

            <img 
                src="${mealData.strMealThumb}" 
                alt="${mealData.strMeal}"
            />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="far fa-heart"></i>
            </button>
        </div>
    `;

    const btn = meal.querySelector('.meal-body .fav-btn');

    // console.log(btn);
    
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("active")){
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
        }else{
            addMealLS(mealData.idMeal)
            btn.classList.add("active");
        }
        // clean the container
        favoriteContainer.innerHTML = "";
        fetchFavMeals();
    });

    meals.appendChild(meal); // html 문서의 meals 요소(element)뒤에 meal을 붙임.
}


async function getMealById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);

    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;
}


async function getMealBySearch(term){
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
}



function addMealLS(mealId){
    const mealIds= getMealsLS();

    localStorage.setItem('mealIds', JSON.stringify
    ([...mealIds, mealId]));
}


function removeMealLS(mealId){
    const mealIds = getMealsLS();

    localStorage.setItem(
        'mealIds', 
        JSON.stringify(mealIds.filter((id) => id 
        !== mealId))
    );
}

function getMealsLS(){

    // mealIds : mealId 가 담긴 배열 형태.
    const mealIds = JSON.parse(
        localStorage.getItem('mealIds')
    );

    console.log(mealIds);

    return mealIds === null ? [] : mealIds;
}


async function fetchFavMeals(){
    //clean the container
    favoriteContainer.innerHTML = "";
    
    const mealIds = getMealsLS();
    const meals = [];

    for(let i=0;i<mealIds.length; i++ ){
        const mealId = mealIds[i];
        meal = await getMealById(mealId);

        addMealFav(meal);
    }
}


function addMealFav(mealData){

    const favMeal = document.createElement('li');

    favMeal.innerHTML = `
        <img
            src="${mealData.strMealThumb}"
            alt="${mealData.strMeal}"
        /><span>${mealData.strMeal}</span>
        <button class="clear">
            <i class="fas fa-window-close"></i>
        </button>
    `;

    const btn = favMeal.querySelector('.clear');
    btn.addEventListener('click', ()=>{
        removeMealLS(mealData.idMeal);
        fetchFavMeals();
    })


    favoriteContainer.appendChild(favMeal);
}