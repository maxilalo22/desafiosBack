
import { logger } from '../utils/logger.js'


//console.log('cargando config')

//export const MODO_EJECUCION = 'online'
export const MODO_EJECUCION = 'offline'

export const PORT = 8080



export const loggerLevel = {
    CONSOLE: MODO_EJECUCION === 'offline' ? 'error': 'http',
    FILE: MODO_EJECUCION === 'offline' ? 'http' : 'error'
}
//export const NODE_ENV  = process.env.NODE_ENV || 'development'

//logger.info('configuración cargada')