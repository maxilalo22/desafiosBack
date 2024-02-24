import express from 'express'
import { apiRouter } from '../routers/api/api.router.js'

export const app = express()

app.use('/static', express.static('./static'))

app.use('/api', apiRouter)

