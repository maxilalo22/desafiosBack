import { faker } from '@faker-js/faker/locale/es'

export function creatProductMock() {
    return {
        _id: faker.string.uuid(),
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price()
    }
}

export class ProductsDaoMock {

    constructor() {
        this.products = []
    }

    async create(productPojo) {
        throw new Error('NOT IMPLEMENTED')
    }

    async readOne() {
        throw new Error('NOT IMPLEMENTED')
    }

    async readMany() {
        const products = []
        for (let i = 0; i < 100; i++) {
            products.push(creatProductMock())
        }
        return products
    }

}