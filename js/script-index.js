$(document).ready( function(){
	//1 llamando funcion que oculta flecha
	hideFlecha();
    //2 llamando funcion que muestra "nuevas recetas"
	printNews()
	//3 La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	
});

/*ocultar flecha*/
function hideFlecha() {
	$("#flecha").hide();
}

function printNews(){
$('.callout-news').append("<p>NUEVAS RECETAS</p>");

}

/*
* 3 Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	/*para(for) cada i(puede ser cualquier letra) en (in) recipesArray(data) se ejecutará: if*/
		 for (var i in recipesArray) {
		 	/*SI en la data (recipeArray) encuentra en el index ([i]) "highlighted"... */
      		if(recipesArray[i].highlighted);{
      			/*llama la funcion que cumplio*/
      			renderRecipe(recipesArray[i]);
      		}

    }
}
/*
* 4 Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {


	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


