// 1. E-Commerce Product Catalog  


fetch("../js/products.json")
.then(response=>response.json())
.then(data=>showinfo(data));







// -----------Implement price filtering (e.g., show products below $500). ---------------

function showinfo(data){

  const dataMain = data.products;
  console.log(data);
  

const theIds = dataMain.filter((element) => element.price < 500);

// ---------------Add sorting functionality (e.g., sort by price low to high). ---------------

const sortingdata = dataMain.sort((a, b) => a.price - b.price); 

console.log(theIds);
console.log(sortingdata);




}

// -----------------------️. Display product details when a user clicks on a product. -------------------
 



