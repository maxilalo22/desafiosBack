import { Router, json, urlencoded } from 'express'
import { manejoDeErrores } from '../../middlewares/manejoDeErrores.js'
import { respuestasMejoradas } from '../../middlewares/respuestasMejoradas.js'
import { productsMockRouter } from './products.mock.router.js'

export const apiRouter = Router()

apiRouter.use(respuestasMejoradas)

apiRouter.use(json())
apiRouter.use(urlencoded({ extended: true }))



apiRouter.use('/productsMock', productsMockRouter)

apiRouter.use(manejoDeErrores)