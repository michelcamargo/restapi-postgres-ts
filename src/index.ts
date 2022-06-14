import express from 'express';
import indexRoutes from './routes/index';

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
// const loggingMiddleware = require('middlewares/logging/index');
// const errorLoggingMiddleware = require('error-log-service');
let corsOptions = {
  origin: 'http://localhost:4200',
  ssl: true
}

// Controle de ambiente
if ("development" == app.get("env")) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // PROD ONLY
}

// Mediadores
app.use(cors(corsOptions));
// app.use(errorLoggingMiddleware);
// app.use(loggingMiddleware);
app.use(express.json());


app.use(express.urlencoded({
  extended: true
}));

app.use(indexRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});