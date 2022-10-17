//STEP 1
var favoriteMovies = ["Star Wars","Thor","Iron Man","Avengers","The Dark Knight"]
console.log(favoriteMovies[1]);
console.log(`=================================`);

//STEP 2
var movies = new Array(5);
movies[0] ="Star Wars"
console.log(movies);
console.log(`=================================`);

//STEP 3
let start = 2
let end = 0
movies.splice(start, end, "Iron Man")

console.log(movies);
console.log(`=================================`);

//STEP 4

var movies = ["Star Wars", "Thor", "Iron Man", "Avengers", "The Dark Knight"];
delete movies[0]
console.log(movies);
console.log(`=================================`);

//STEP 5
var movies = ["Star Wars", "Thor", "Iron Man", "Avengers", "The Dark Knight","Superman","Aqua Man"];
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    
}
console.log(`=================================`);

//STEP 6
var movies = [
  "Star Wars",
  "Thor",
  "Iron Man",
  "Avengers",
  "The Dark Knight",
  "Superman",
  "Aqua Man",
];
for (const movie in movies) {
console.log(movies[movie]);
}
console.log(`=================================`);
//STEP 7
var movies = [
  "Star Wars",
  "Thor",
  "Iron Man",
  "Avengers",
  "The Dark Knight",
  "Superman",
  "Aqua Man",
];
movies.sort()
for (const movie in movies) {
  console.log(movies[movie]);
}
console.log(`=================================`);

//STEP 8
var leastFavMovies = ["Dune", "Justice League", "The Last Skywalker"];
var moviesILike = ["Star Wars", "Thor", "Iron Man"];

console.log(`Movies I like:\n\n `);
for (let i = 0; i < moviesILike.length; i++) {
  console.log(`${moviesILike[i]}`);
}
console.log(`...`);
console.log(``);
console.log(`Movies I regret watching:\n\n `);
for (let i = 0; i < leastFavMovies.length; i++) {
  console.log(`${leastFavMovies[i]}`);
}
console.log(`...`);

console.log(`=================================`);

//STEP 9
var leastFavMovies = ["Dune", "Justice League", "The Last Skywalker"];

var movies = [
  "Star Wars",
  "Thor",
  "Iron Man",
  "Avengers",
  "The Dark Knight",
  "Superman",
  "Aqua Man",
].concat(leastFavMovies);
movies.sort();
movies.reverse()
for (const movie in movies) {
  console.log(movies[movie]);
}
console.log(`=================================`);
//STEP 10
var leastFavMovies = ["Dune", "Justice League", "The Last Skywalker"];

var movies = [
  "Star Wars",
  "Thor",
  "Iron Man",
  "Avengers",
  "The Dark Knight",
  "Superman",
  "Aqua Man",
].concat(leastFavMovies);
movies.sort();
movies.reverse();
console.log(movies.slice(-1));
console.log(`=================================`);
