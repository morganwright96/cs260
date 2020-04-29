document.getElementById("getRecipes").addEventListener("click", function (event) {
    event.preventDefault();

    const apikey = "apiKey=b0fb07b184e0484c946f3372dae50936";
    const searchType = document.getElementById('selector').value;
    console.log(searchType);
    const queryValue = document.getElementById('recipeQuery').value;
    const numRecipies = document.getElementById('numRecipes').value
    let url = "https://api.spoonacular.com/recipes/";

    //Random Recipe generation
    if (queryValue === "") {
        url += "random?number=" + numRecipies + "&" + apikey;
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let resutls = "";
                document.getElementById("recipeHeader").innerHTML = "Random Recipes";

                for (let i = 0; i < json.recipes.length; i++) {
                    //create the card for each of the forcast values

                    resutls += "<div class='col-md-4'><div class='card mb-4 mt-4 boxshadow'><div class='card-body'>";
                    //date and time
                    resutls += "<h5>" + json.recipes[i].title + "</h5>";
                    resutls += "<img class='card-img-top img-thumbnail' src=" + json.recipes[i].image + " alt='recipeImage'>"
                    resutls += "<a href=" + json.recipes[i].spoonacularSourceUrl + " target='_blank'>Recipe Info</a>"
                    resutls += "</div></div></div>";
                }
                document.getElementById("recipesResults").innerHTML = resutls;
                //console.log(json);
            });
    }
    else if (searchType === "query") {
        url += "search?number=" + numRecipies + "&query=" + queryValue + "&" + apikey;
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let resutls = "";
                document.getElementById("recipeHeader").innerHTML = "Recipes Based on " + queryValue;
                console.log(json);
                for (let i = 0; i < json.results.length; i++) {
                    //create the card for each of the forcast values

                    resutls += "<div class='col-md-4'><div class='card mb-4 mt-4 boxshadow'><div class='card-body'>";
                    resutls += "<h5>" + json.results[i].title + "</h5>";
                    resutls += "<img class='card-img-top img-thumbnail' src='https://spoonacular.com/recipeImages/" + json.results[i].image + "' alt='recipeImage'>"
                    resutls += "</div></div></div>";
                }
                document.getElementById("recipesResults").innerHTML = resutls;
            });
    }
    else if (searchType === "cuisine") {
        url += "search?number=" + numRecipies + "&cuisine=" + queryValue + "&" + apikey;
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let resutls = "";
                document.getElementById("recipeHeader").innerHTML = queryValue + " recipes";
                console.log(json);
                for (let i = 0; i < json.results.length; i++) {
                    //create the card for each of the forcast values

                    resutls += "<div class='col-md-4'><div class='card mb-4 mt-4 boxshadow'><div class='card-body'>";
                    resutls += "<h5>" + json.results[i].title + "</h5>";
                    resutls += "<img class='card-img-top img-thumbnail' src='https://spoonacular.com/recipeImages/" + json.results[i].image + "' alt='recipeImage'>"
                    resutls += "</div></div></div>";
                }
                document.getElementById("recipesResults").innerHTML = resutls;
            });
    }
});