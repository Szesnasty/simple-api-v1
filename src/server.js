import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errorHandler } from './error/error.handler.js';
import { router } from './router.js';

const { PORT = 3004 } = process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.all('*', (req, res) => {
  const { url, method } = req;
  res
    .status(404)
    .json({ message: `Path ${url} for method ${method} not found` });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

//gdy pojawi sie błąd która np. zawiesi nasz serwer
process.on('uncaughtException', (err) => {
  console.error('uncaughtException');
  console.dir(err);
});
