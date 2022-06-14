import express from "express";

const app = express();
const winston = require('winston');
const consoleTransport = new winston.transports.Console();
const errorFileTransport = new winston.transports.File({ filename: 'error.log', level: 'error' });
const combinedFileTransport = new winston.transports.File({ filename: 'combined.log' });


const winstonOptions = {
  transports: [
    consoleTransport,
    errorFileTransport,
    combinedFileTransport
  ]
}
const logger = new winston.createLogger(winstonOptions);

function logRequest(req: express.Request, res: express.Response, next: express.NextFunction) {
  logger.info(req.url);
  next();
}
app.use(logRequest)

function logError(err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) {
  logger.error(err);
  next();
}
app.use(logError)