//import { connect as connectToMongoose } from 'mongoose'
import { MODO_EJECUCION } from '../config/config.js'
import { logger } from '../utils/logger.js'

export async function connect() {
    if (MODO_EJECUCION === 'online') {
        await connectToMongoose(MONGODB_CNX_STR)
        logger.info('conectado a mongodb')
        //console.log('conectado a mongodb')
    } else {
        logger.info('trabajando con persistencia local')
        //console.log('trabajando con persistencia local')
    }
}