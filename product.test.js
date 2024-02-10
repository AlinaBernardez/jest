const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct, products, id} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('addProduct', () => {
    it('Should include name and price parameters', () => {
        expect(() => addProduct('', '')).toThrow('Name and price required')
    })
    it('Name should not be included already', () => {
        expect(products).not.toContain('leche')
    })
    it('Should add new Product', () => {
        addProduct('water', 1.2)
        products.map(product => {
            expect(product).toContain('water')
        })
    })
    it('Should increment id by 1', () => {
        addProduct('water', 1.2)
        expect(id).toBe(0)
    })
});

describe('removeProduct', () => {
    it('Thorw error if product doesn`t exist', () => {
        expect(() => removeProduct(3)).toThrow('No products available')
    })
    it('Should remove product by id', () => {
        addProduct('water', 1.2)
        removeProduct(0)
        expect(products).toStrictEqual([])
    })
});

describe('getProduct', () => {
    it('Thorw error if product doesn`t exist', () => {
        addProduct('water', 1.2)
        expect(() => getProduct(3)).toThrow('No such ID product found')
    })
    it('Should return product by id', () => {
        addProduct('water', 1.2)
        expect(getProduct(0)).toEqual([{name: 'water', price: 1.2, 'id': 0}])
    })
});

describe('updateProduct', () => {
    it('Thorw error if product doesn`t exist', () => {
        addProduct('water', 1.2)
        expect(() => updateProduct(3)).toThrow('No product found')
    })
    it('Should update product by id', () => {
        addProduct('water', 1.2)
        updateProduct(0, 'Water', 1.5)
        expect(getProduct(0)).toEqual([{name: 'Water', price: 1.5, 'id': 0}])
    })
});
