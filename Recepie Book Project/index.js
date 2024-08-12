const API_KEY="8247373455d149468bc8d89ff18aa188"
const reEl=document.getElementById("recipe-list")
async function getRecipes(){
const response= await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
const data = await response.json()
return data.recipes;
}

function display(recipes){
reEl.innerHTML=""
let i=0;
recipes.forEach((recipe)=>{
    i++;
    const reItel=document.createElement("li");
    reItel.classList.add("recipe-item");
    reImg =document.createElement("img");
     reImg.src=recipe.image;
     reImg.alt=recipe.image;
     reT=document.createElement("h2");
     reT.innerHTML=recipe.title;
     reInEl=document.createElement("p");
     reLk=document.createElement("a")
     reLk.href=recipe.sourceUrl;
     reLk.innerHTML="view Recipe";
     reInEl.innerHTML=`
     <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(",")}`;
    reItel.appendChild(reImg);
    reItel.appendChild(reT);
    reItel.appendChild(reInEl);
    reItel.appendChild(reLk);
    reEl.appendChild(reItel);
});

}

 async function init(){
const recipes=await getRecipes();

display(recipes)
}
init()