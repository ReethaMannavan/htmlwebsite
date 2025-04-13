// JS88. Create a Book constructor function with title, author, and price, and filter books based on price. 


function Book(title, author, price){

    this.title = title;
    this.author = author;
    this.price = price;
    this.filter = function()
    {
return this.price.filter = price > 80;

    }
}

let book1 = new Book("Harry Potter", "J.K.Rowling", 100);

console.log(book1.filter());
console.log(book1);

