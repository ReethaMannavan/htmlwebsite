// JS90. Create a ShoppingCart constructor with an array of products and methods to add, remove, and calculate total price. 

function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

function ShoppingCart() {
    this.items = [];
    this.addProduct = function (product) {
        this.items.push(product);
    },

        this.removeProduct = function (product) {
            this.items.filter(item => item.product !== product)
        },
   
    this.getTotal = function () {
        return this.items.reduce((total, item) => total + item.price, 0);
    };
}
let cart = new ShoppingCart();
cart.addProduct(new Product("Laptop", 1000, "Electronics"));
cart.addProduct(new Product("Headphones", 200, "Accessories"));

console.log("Total Price:", cart.getTotal());






