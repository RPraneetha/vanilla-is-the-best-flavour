// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    if(bookName.toLowerCase().includes("great"))
        return;
    favoriteBooks.push(bookName)
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
    for (book of favoriteBooks) {
        console.log(`Favorite book: ${book}`)
    }
    console.log(`Total number of favorite books is ${favoriteBooks.length}`)
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks()
