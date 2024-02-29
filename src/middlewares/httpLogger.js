import { LogLevel } from "../config/config.js";

export function httpLogger(req,res, next) {
    req.logger.log(LogLevel.INFO, `[${req.method}] ${req.url}`);
    next();
}