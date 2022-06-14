import { express } from "../../index";
import DateTime from "../date-time";

const winston = require('winston');
// const consoleTransport = new winston.transports.Console();
const errorFileTransport = new winston.transports.File({ filename: 'logs/error.log', level: 'error' });
const combinedFileTransport = new winston.transports.File({ filename: 'logs/combined.log' });

const winstonOptions = {
  transports: [
    // consoleTransport,
    errorFileTransport,
    combinedFileTransport
  ]
}

type HttpInfo = {
  method: string,
  target: string,
  statusCode: number,
  timestamp: string
}

const logger = new winston.createLogger(winstonOptions);

class LoggingService {
  public logRequest(req: express.Request, res: express.Response, next: express.NextFunction) {
    const info: HttpInfo = {
      method: req.method,
      target: req.url,
      statusCode: res.statusCode,
      timestamp: DateTime.getTimestamp()
    }

    console.log('[>]\x1b[33m%s\x1b[0m', JSON.stringify(info));
    logger.info(JSON.stringify(info));
    next();
  }

  public logError(err: any, req: any, res: any, next: any) {
    logger.error(err);
    next();
  }
}

export default LoggingService;