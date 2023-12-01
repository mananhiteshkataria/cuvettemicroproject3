const fs = require("fs");

function readJsonFile(fname) {
  try {
    const data = fs.readFileSync(fname, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}

const foods = readJsonFile("food.json");
console.log("List of all Food items");
console.log(foods);

function filterFoods(foods, category) {
  return foods.filter((food) => food.category === category);
}


const vegetables = filterFoods(foods, "Vegetable");
console.log("Food items with category Vegetable");
console.log(vegetables);


const fruits = filterFoods(foods, "Fruit");
console.log("Food items with category Fruit");
console.log(fruits);


const protein = filterFoods(foods, "Protein");
console.log("Food items with category Protein");
console.log(protein);


const nuts = filterFoods(foods, "Nuts");
console.log("Food items with category Nuts");
console.log(nuts);


const grains = filterFoods(foods, "Grain");
console.log("Food items with category Grain");
console.log(grains);


const dairy = filterFoods(foods, "Dairy");
console.log("Food items with category Dairy");
console.log(dairy);


function filterFoodsBelowUserLimitCalorie(foods, minCal) {
  return foods.filter((food) => food.calorie > minCal);
}
const highCalFoods = filterFoodsBelowUserLimitCalorie(foods, 100);
console.log("Food items with calorie above 100");
console.log(highCalFoods);


function filterFoodsAboveUserLimitCalorie(foods, maxCal) {
  return foods.filter((food) => food.calorie < maxCal);
}
const lowCalFoods = filterFoodsAboveUserLimitCalorie(foods, 100);
console.log("Food items with calorie below 100");
console.log(lowCalFoods);


function sortProtein(foods) {
  return foods.slice().sort((a, b) => b.protiens - a.protiens);
}
console.log("Food items with highest protein content to lowest");
console.log(sortProtein);


function sortCarbs(foods) {
  return foods.slice().sort((a, b) => a.cab - b.cab);
}
const sortcarbs = sortCarbs(foods);
console.log("Food items with lowest cab content to highest");
console.log(sortcarbs);