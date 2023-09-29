// variables declaration
const productList = [];
let totalPrice = 0;


// functions declaration
function addNewProduct(productName, productDetails, productPrice = 0, productPhoto) {
    let Product = {
        name: productName,
        details: productDetails,
        price: productPrice,
        photo: productPhoto
    }
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
    return productList.filter(product => product.name.search(regex) >= 0);
}

// program execution
addNewProduct("P1", "P1_details", 100, null);
addNewProduct("P2", "P2_details", 200, null);
addNewProduct("P3", "P3_details", 300, null);

console.log(productList);
console.log(getTotalPrice());
console.log(findProduct("P"));