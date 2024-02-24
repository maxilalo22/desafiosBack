import { randomUUID } from 'node:crypto'
import { newError, newInvalidDataError } from '../errors/errors.js'

export class Product {
    #_id
    #name
    #description
    #price
    constructor({ _id = randomUUID(), nombre, email }) {
        this.#_id = _id
        this.#name = name
        this.#description = description
        this.#price = price
    }

    get _id() { return this.#_id }
    get name() { return this.#name }
    get description() { return this.#description }
    get price() { return this.#price }

    set name(value) {
        if (!value) throw newInvalidDataError('el nombre es obligatorio')
        this.#name = value
    }

    set description(value) {
        if (!value) throw newInvalidDataError('la descripción es obligatoria')
        this.#description = value
    }

    set price(value) {
        if (!value) throw newInvalidDataError('el precio es obligatorio')
        this.#price = value
    }

    toPOJO() {
        return {
            _id: this.#_id,
            name: this.#name, 
            description: this.#description, 
            price: this.#price 
        }
    }
}