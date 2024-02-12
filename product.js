let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
};

function findingProduct(arr, param) {
    return arr.find(item => item.param == param)
};

function addProduct(name, price) {
    let found = findingProduct(name)
    if(!name || !price) {
        throw new Error('Name and price required')
    }
    if(found) {
        throw new Error('This product already exists')
    }
    let newProduct = {'name': name, 'price': price, 'id': id}
    id++
    products.push(newProduct)
    return newProduct
};

function removeProduct(id) {
    if(products.length == 0) {
        throw new Error ('No products available')
    }
    if(products.length > 0) {
        if(!products.find(item => item.id == id)) {
            throw new Error ('No such ID found')
        }
        products = products.filter(product => product.id !== id)
        return 'Product deleted!'
    }
};

function getProducts() {
    if(products.length == 0) {
        throw new Error ('Product list is empty!')
    }
    return products
};

function getProduct(id) {
    let check = findingProduct(id)
    if(products.length == 0) {
        throw new Error ('No products available')
    }
    if(products.length > 0) {
        if(!check) {
            throw new Error ('No such ID product found')
        }
        if(check) {
            return check
        }
    }
};

function updateProduct(id, name, price) {
    let check = findingProduct(id)
    if(products.length == 0) {
        throw new Error ('Products list empty!')
    }
    if(!name && !price) {
        throw new Error('Name or price required')
    }
    if(!check) {
        throw new Error ('No product found')
    }
    if(name) check.name = name
    if(price) check.price = price
    return check
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
