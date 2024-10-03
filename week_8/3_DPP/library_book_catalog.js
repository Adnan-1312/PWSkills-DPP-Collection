//library book catalog

// Initialize an object to store book details
let bookCatalog = {
    '1984': {
        author: 'George Orwell',
        available: true,
        copies: 4
    },
    'To Kill a Mockingbird': {
      author: 'Harper Lee',
      available: false,
      copies: 0,
    },
    'The Great Gatsby': {
      author: 'F. Scott Fitzgerald',
      available: true,
      copies: 3,
    },
  };


  // display each book details using for-in loop
 function displayCatalog(catalog){
    console.log("The current catalog is");
    for (let book in bookCatalog) {
        console.log(
          `${book} by ${bookCatalog[book].author} , Available: ${bookCatalog[book].available}, Copies: ${bookCatalog[book].copies}`
        );
      }; 
      return 
 };
 console.log(displayCatalog());



 // Function to add a new book to the catalog
function addBook(catalog, title, author, available, copies) {
    catalog[title] = { author: author, available: available, copies: copies };
    console.log(`${title} has been added to the catalog.`);
  };
  console.log(addBook())
  
  