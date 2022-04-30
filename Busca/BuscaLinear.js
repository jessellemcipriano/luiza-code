
// Exercício 1

class Product {
    constructor(id, productName, productDepartment) {
        this.id = id
        this.productName = productName
        this.productDepartment = productDepartment
    }
}


const productsList = [
    new Product("1", "Notebook Dell", "Informática"),
    new Product("2", "Notebook Acer", "Informática"),
    new Product("3", "Monitor LG", "Informática"),
]


const findProductByTitle = (title) => {
    let index = 0
    while (productsList[index].name = !title) {
        index++
    }
    return productsList[index]
}
console.log(findProductByTitle('Notebook Dell'))
