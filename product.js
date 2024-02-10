let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
};

function addProduct(name, price) {
    if(!name || !price) {
        throw new Error('Name and price required')
    }
    if(products.length > 0) {
        products.map(product => {
            if(product.name == name) {
                throw new Error('This product already exists')
            }
            let newProduct = {'name': name, 'price': price, 'id': id}
            id++
            products.push(newProduct)
            return products
        })
    }
    else if(products.length == 0) {
        let newProduct = {'name': name, 'price': price, 'id': id}
        id++
        products.push(newProduct)
        return products
    }
};

function removeProduct(id) {
    if(products.length == 0) {
        throw new Error ('No products available')
    }
    if(products.length > 0) {
        if(!products.find(item => item.id == id)) {
            throw new Error ('No such ID found')
        }
        products.splice(id, 1)
    }
};

function getProducts() {
    if(products.length == 0) {
        throw new Error ('Product list is empty!')
    }
    console.log(products)
};

function getProduct(id) {
    let check = products.find(item => item.id == id)
    if(products.length == 0) {
        throw new Error ('No products available')
    }
    if(products.length > 0) {
        if(!check) {
            throw new Error ('No such ID product found')
        }
        if(check) {
            let search = products.filter(prod => prod.id == id)
            return search
        }
    }
};

function updateProduct(id, name, price) {
    if(products.length == 0) {
        throw new Error ('Products list empty!')
    }
    if(!products.find(item => item.id == id)) {
        throw new Error ('No product found')
    }
    products.map(product => {
        if(product.id == id) {
            product.name = name
            product.price = price
        }
    })
};

module.exports = {
    products,
    id,
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
}
