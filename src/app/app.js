import express from 'express'
import { apiRouter } from '../routers/api/api.router.js'
import { httpLogger } from '../middlewares/httpLogger.js'
import { LogLevel, MODO_EJECUCION } from '../config/config.js'
import { developmentLogger, productionLogger } from '../utils/logger.js'

export const app = express()



app.use((req, res, next) => {
    req.logger = MODO_EJECUCION === 'production' ? productionLogger : developmentLogger;
    next()
})

app.use(httpLogger)
app.use('/static', express.static('./static'))

app.use('/api', apiRouter)

app.get('/loggerTest', (req, res) => {
    req.logger.log(LogLevel.DEBUG, 'Este es un mensaje de debug');
    req.logger.log(LogLevel.HTTP, 'Este es un mensaje de HTTP');
    req.logger.log(LogLevel.INFO, 'Este es un mensaje de info');
    req.logger.log(LogLevel.WARNING, 'Este es un mensaje de warning');
    req.logger.log(LogLevel.ERROR, 'Este es un mensaje de error');
    req.logger.log(LogLevel.FATAL, 'Este es un mensaje de fatal');
    res.send('Prueba del logger completada');
});