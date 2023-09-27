class Product {
  constructor(name, details, price, photo) {
    this.name = name;
    this.details = details;
    this.price = price;
    this.photo = photo;
  }
}

function addNewProduct(Product) {
  productList.push(Product);
}

function getTotalPrice() {
  totalPrice = 0;
  productList.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}

function findProduct(productName) {
  const regex = new RegExp(productName, "i");
  return productList.filter((product) => {
    return product.name.search(regex) >= 0;
  });
}

const productList = [];
let totalPrice = 0;

addNewProduct(new Product("P1", "P1_details", 100, null));
addNewProduct(new Product("P2", "P2_details", 200, null));
addNewProduct(new Product("P3", "P3_details", 300, null));

console.log(productList);
console.log(getTotalPrice());
console.log(findProduct("P2"));
