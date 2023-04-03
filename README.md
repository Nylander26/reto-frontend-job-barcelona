[![CodeFactor](https://www.codefactor.io/repository/github/nylander26/reto-frontend-job-barcelona/badge)](https://www.codefactor.io/repository/github/nylander26/reto-frontend-job-barcelona)

# Nombre del Proyecto

FoodieU, es una app que busca y muestra diferentes recetas ya sean al azar o filtradas por busqueda de ingredientes.

# Descripcion

Este proyecto realizado con la libreria de React implementa una busqueda mediante una API que muestra informacion de recetas y como prepararlas.

Mediante una API se realizan busquedas constantes ya sea de recetas en si o busquedas por ingredientes mediante un filtro de busqueda aplicado, muestra tipos de alimentos varios, y de distintas culturas tambien.

# Uso e Instalacion

```javascript
# 'npm install'
Instalara todas las dependencias del proyecto.

# 'npm start' 
Compilara el proyecto y mostrara el mismo en localhost.
```

# API ENDPOINTS

### GET /Searched/
Busca las recetas y las muestra dependiendo del parametro de busqueda.
```javascript
# GET `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query="meat"`

# Response
{
    id: 651326,
    image: "https://spoonacular.com/recipeImages/651326-312x231.jpg",
    imageType: "jpg",
    title: "Meat rolls with prosciutto and sage"
}
```

### GET /Random/
Busca recetas al azar y muestra un total de 9 recetas (Va a depender del parametro "number").
```javascript
# GET `https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=9`

# Response "https://spoonacular.com/food-api/docs#Get-Recipe-Information"
```

### GET /Veggies/
Busca y muestra solo recetas veganas.
```javascript
# GET `https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&tags=vegetarian`

# Response "https://spoonacular.com/food-api/docs#Get-Recipe-Information"
```

### GET /Cuisine/
Busca y muestra distintos tipos de cocina, va a depender del parametro "cuisine".
```javascript
# GET `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&cuisine="italian"`

# Response
{
    id: 634481,
    image: "https://spoonacular.com/recipeImages/634481-312x231.jpg",
    imageType: "jpg",
    title: "Bbq Chicken and Goat Cheese Ravioli"
}
```

### GET /DetailedRecipe/
Busca y muestra la receta detallada, mostrando ingredientes y proceso de preparacion.
```javascript
# GET `https://api.spoonacular.com/recipes/{Id}/information?apiKey=${APIKEY}`

#Response `https://spoonacular.com/food-api/docs#Get-Recipe-Information`
```