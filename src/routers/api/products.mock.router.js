import { Router } from "express";
import { ProductsDaoMock } from "../../DAOS/productsMock/products.daos.mock.js";

const productsDaoMock = new ProductsDaoMock()
export const productsMockRouter = Router()



productsMockRouter.get('/', async (req,res) =>{
    res.json(await productsDaoMock.readMany())
})