function cakes(recipe, available) {
  let recipeKeys = Object.keys(recipe);
  let availableKeys = Object.keys(available);
  let bool = recipeKeys.every(x => availableKeys.includes(x));
  if(bool){
    let arr = recipeKeys.map( x => available[x]/recipe[x]);
    let value = arr.sort((a,b)=> a-b)[0];
    return Math.floor(value);
  }
  else{
    return 0;
  }
}

