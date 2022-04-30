
class Product {
    constructor(id, productName, productDepartment, productValue) {
        this.id = id
        this.productName = productName
        this.productDepartment = productDepartment
        this.productValue = productValue
    }
}

let productsList = [
    new Product("1", "Notebook Dell", "Informática", 20000),
    new Product("2", "Notebook Acer", "Informática", 3000),
    new Product("3", "Monitor LG", "Informática", 5000),
    new Product("4", "Monitor HP", "Informática", 50000),
]


const sortProductsByValue = (productsList) => {
    for (let i = 0; i < productsList.length - 1; i++) {
        if (productsList[i].productValue > productsList[i + 1].productValue) {
            let aux = productsList[i].productValue;
            productsList[i].productValue = productsList[i + 1].productValue;
            productsList[i + 1].productValue = aux;
        }
    }
    return productsList
}


const findProductByValue = (productsList, value) => {
    let startIndex = 0
    let endIndex = productsList.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        if (productsList[middleIndex].productValue == value) {
            return productsList[middleIndex]
        }
        if (productsList[middleIndex].productValue > value) {
            endIndex = middleIndex - 1;
        }
        else {
            startIndex = middleIndex + 1;
        }
    }
}


productsList = sortProductsByValue(productsList)
console.log(findProductByValue(productsList, 50000))