let actionMovies = ["Kill","Animal","War",];
let dramaMovies = ["Sholay","The Dunky","Simba"];
let movieYears = [2024,2023,2021,1982,2023,2019];


//merge using concat method
function mergeMovies(){
    console.log("Array after concat method:-")
    movies = actionMovies.concat(dramaMovies);
    return movies;
};
console.log(mergeMovies());


// sort using sort method
function sortMovies() {
    let sorted = movies.sort();
    console.log('Sorted Movies:-');
    return sorted;
};
console.log(sortMovies());


// sort years by sort method
function sortYears() {
    let sorted = [...movieYears].sort((a, b) => a - b);
    console.log('Sorted Movie Years:-');
    return sorted;
  }
  console.log(sortYears())



// display movies using for each method
function displayMovies(titles){
    console.log("Movie Titles:-")
    actionMovies.forEach((movie)=> movie);
    titles = actionMovies.concat(dramaMovies);
    return movies;
}
console.log(displayMovies());


// uppercase movie titles using map and toUpperCase method
function getUppercaseMovies() {
    let uppercase = movies.map((movies) => movies.toUpperCase());
    console.log('Uppercase Movies:-');
    return uppercase;
  }
console.log(getUppercaseMovies());


//filter movies containing the word in title
function getMoviesWithThe() {
    let withThe = movies.filter((movie) => movie.includes('The'));
    console.log("Movies with 'The':-");
    return withThe;
  }
  console.log(getMoviesWithThe());


  //calculate total length of all movie titles using reduce method
  function getTotalTitleLength() {
    let total = movies.reduce((sum, movie) => sum + movie.length, 0);
    console.log('Total Length of All Movie Titles:');
    return total;
  }
  console.log(getTotalTitleLength());


  //Concatenate Titles from Right to Left using reduce right method
  function getConcatenatedTitles() {
    let concatenated = movies.reduceRight((acc, movie) => acc + ' ' + movie, '').trim();
    console.log('Concatenated Titles from Right to Left:-');
    return concatenated;
  }
  console.log(getConcatenatedTitles());


  // check all movies containing "e" using every method
  function checkAllMoviesContainE() {
    let allContainE = movies.every((movie) => movie.toLowerCase().includes('e'));
    console.log("All movies contain 'e':");
    return allContainE;
  };
  console.log(checkAllMoviesContainE());

  
  // check any movie containes "e" using some method
  function checkAnyMovieContainsE() {
    let someContainE = movies.some((movie) => movie.toLowerCase().includes('e'));
    console.log("At least one movie contains 'e':-");
    return someContainE;
  };
  console.log(checkAnyMovieContainsE());

  
  // find index of movie using indexOf method
  function findMovieIndex() {
    let index = movies.indexOf(title="Sholay");
    console.log(`Index of '${title}'is`);
    return index;
  };
  console.log(findMovieIndex());

  // find last index of the movie using lastIndexOf method
  function findLastMovieIndex(title) {
    let lastIndex = movies.lastIndexOf(title = "The Dunky");
    console.log(`Last Index of '${title}'is `);
    return lastIndex;
  };
  console.log(findLastMovieIndex())
  

  // find movie with a long title using find method
  function findLongTitleMovie() {
    let longTitle = movies.find((movie) => movie.length > 6);
    console.log('The First movie with a title longer than 6 characters is ');
    return longTitle;
  };
  console.log(findLongTitleMovie());

  
  // find index of first long title movie using findIndexOf method
  function findLongTitleMovieIndex() {
    let index = movies.findIndex((movie) => movie.length > 6);
    console.log('Index of first movie with a title longer than 6 characters is ');
    return index;
  };
  console.log(findLongTitleMovieIndex());
  

  // check movie inclusion using include method
  function checkMovieInclusion() {
    let included = movies.includes(title = "War");
    console.log(`Does This Array includes '${title}'?`);
    return included;
  };
  console.log(checkMovieInclusion());
  
  
  
  
