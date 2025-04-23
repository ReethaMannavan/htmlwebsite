// 2. Library Book Management System Requirements 

//  1. Store Book Records: Maintain book ID, title, author, genre, availability 
// status, and borrower details in an array of objects. 

//  2. Search Books: Allow searching for books by title, author, or genre. 

// 3. Track Borrowed Books: Update book status when issued and return it 
// upon submission. 

//  4. List Available Books: Display only books that are currently available for 
// borrowing. 



// ------------------------Storing Book Records---------------------

let Book = [
    {
        bookId: 1, title: "The Maze Runner", author: "James Dashner", genre: "adventure", bookstate: "Available",
        borrows: [{
            id: "156189",
            returned: false,
        }]
    },
    {
        bookId: 2, title: "Heroes of Olympus", author: "rick Riordan", genre: " Historical Fiction", bookstate: "Available",
        borrows: [{
            id: "156159",
            returned: true,
        }]
    },
    {
        bookId: 3, title: "Breaking Dawn", author: "Stephenie", genre: "Fiction", bookstate: "Available",
        borrows: [{
            id: "156889",
            returned: true,
        }]
    },
    {
        bookId: 4, title: "The Atlas Six", author: "Olivia Blake", genre: "Fantasy", bookstate: "Available",
        borrows: [{
            id: "166189",
            returned: false,
        }]
    }
];


// ------------Searching Books-------------


let findBook = Book.find(b => b.title === "The Atlas Six");

console.log(`This ${findBook.title} is available`);


// ------------Track Borrowed Books--------------




function partitionBooksByBorrowedStatus(b) {
    return b.reduce((a, c) => { a[+(c.borrows[0] && c.borrows[0].returned)].push(c); return a }, [[], []])
}

console.log(partitionBooksByBorrowedStatus(Book));




// ----------------Listing Available Books------------------


console.log(Book.find((prev, book) => prev || book.borrows.filter(item => item.returned == "true")));













