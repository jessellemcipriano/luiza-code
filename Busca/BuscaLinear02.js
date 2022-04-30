
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
    new Product("4", "Geladeira consul", "Eletrodomésticos")
]


const findProductsByDepartment = (department) => {
    let productsFilteredByDepartment = []

    productsList.forEach(product => {
        if (product.productDepartment.includes(department)) {
            productsFilteredByDepartment.push(product)
        }
    });

    return (productsFilteredByDepartment)

}

console.log(findProductsByDepartment('Eletro'))