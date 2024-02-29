import winston from 'winston'
import { LogLevel } from '../config/config.js'



// Logger para desarrollo
export const developmentLogger = winston.createLogger({
    transports: [
        new winston.transports.Console({ 
            level: LogLevel.DEBUG 
        }),
        new winston.transports.File({ 
            level: LogLevel.DEBUG, 
            filename: './logs/log.txt' 
        })
    ]
});

// Logger para producción
export const productionLogger = winston.createLogger({
    transports: [
        new winston.transports.File({ 
            level: LogLevel.INFO,
            filename: './logs/log.txt' 
        })
    ]
});