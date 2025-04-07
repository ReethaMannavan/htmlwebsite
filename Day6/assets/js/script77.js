// JS77. Merge a publisher object into the book object. 

let bookdetails = {
    title:"Harry Potter",
    author:"J.K.Rowling",
    price: 300
};

let bookpublisher = {
    Publisher:"Bloomsbury"
};

let completebook = Object.assign(bookdetails, bookpublisher);
console.log(completebook);



