import express from 'express';
const PORT = 3000;
const app = express();

import indexRoutes from './routes/index';

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});