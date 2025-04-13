// 2. Library Management System (Using Constructor)

function Book(title,author,year)
{
this.title = title;
this.author = author;
this.year = year;
this.search = function(){
    if (title => title.includes(title)) {
        return (`${this.title} ,${this.author}, ${this.year}`);
      }

}

}

const book1 = new Book("Harry Potter", "J.K.Rowling", 1991);
const book2 = new Book("War and Peace", "Leo Tolstoy", 1985);
const book3 = new Book("Time Machine", "H.G.Wells", 1990);

console.log([book1.title, book1.author, book1.year]);
console.log([book2.title, book2.author, book2.year]);
console.log([book3.title, book3.author, book3.year]);


console.log(book1.search("Harry Potter"));





