import express from 'express';
import indexRoutes from './routes/index'
import LoggingService from './middlewares/logging'

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
// const loggingMiddleware = require('middlewares/logging/index');
// const errorLoggingMiddleware = require('error-log-service');
let corsOptions = {
  // origin: 'http://localhost:4200',
  ssl: true
}

// Liberação de acesso em ambiente local

if ("development" == app.get("env")) {
  console.log('Ambiente: ', app.get("env"));
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // DEV ONLY!
}


// Mediadores
app.use(cors(corsOptions));
// app.use(errorLoggingMiddleware);
const logger = new LoggingService;

app.use(logger.logRequest);
app.use(logger.logError);
app.use(express.json());


app.use(express.urlencoded({
  extended: true
}));

app.use(indexRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

// exportando para uso em logging, verificar boas práticas
export {express};