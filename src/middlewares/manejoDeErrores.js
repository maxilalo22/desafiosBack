import { MODO_EJECUCION } from '../config/config.js'
import { ErrorType } from '../errors/errors.js'
import { developmentLogger, productionLogger } from '../utils/logger.js'

export function manejoDeErrores(error, req, res, next) {
    let status
    switch (error.name) {
        case ErrorType.INVALID_DATA:
            status(400)
            break
        case ErrorType.NOT_FOUND:
            status(404)
            break
        default:
            status(500)
    }

    const logger = MODO_EJECUCION === 'production' ? productionLogger : developmentLogger;
    logger.error(`status: ${status} - message: ${error.message}`)

    res.status().json({
        status: 'error',
        message: error.message
    })
}