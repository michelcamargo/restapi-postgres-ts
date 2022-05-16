import express from 'express';
const cors = require('cors')
const app = express();
import indexRoutes from './routes/index';

// var params = { host: host,user: 'username',password: 'password',database: 'database',ssl: true };
//
// var client = new pg.Client(params);
// client.connect();


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // PROD ONLY
if ("development" == app.get("env")) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // PROD ONLY
}

let corsOptions = {
  origin: 'http://localhost:4200'
  // ssl: true
}

// middlewares
app.use(cors(corsOptions));
app.use(express.json());


app.use(express.urlencoded({
  extended: true,
}));

app.use(indexRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});