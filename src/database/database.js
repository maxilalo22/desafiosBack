import { connect as connectToMongoose } from 'mongoose'
import { MODO_EJECUCION, MONGODB_CNX_STR } from '../config/config.js'
import { developmentLogger, productionLogger } from '../utils/logger.js';

/* export async function connect() {
    if (MODO_EJECUCION === 'online') {
        await connectToMongoose(MONGODB_CNX_STR)
        logger.info('conectado a mongodb')
        //console.log('conectado a mongodb')
    } else {
        logger.info('trabajando con persistencia local')
        //console.log('trabajando con persistencia local')
    }
} */
export async function connect() {
    const logger = MODO_EJECUCION === 'production' ? productionLogger : developmentLogger;

    if (MODO_EJECUCION === 'production') {
        await connectToMongoose(MONGODB_CNX_STR)
        logger.info('Conectado a MongoDB') 
    } else {
        logger.info('Trabajando con persistencia local') 
    }
}
