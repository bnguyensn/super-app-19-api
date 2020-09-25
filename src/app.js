import 'dotenv/config';
import express from 'express';
import nodeLogger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

const defaultStartOpts = {
  port: process.env.PORT ? Number(process.env.PORT) : 8080,
};

const start = async ({ port } = defaultStartOpts) => {
  const app = express();

  app.use(nodeLogger('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log(`Express server listening on port ${port}`);

      resolve(server);
    });
  });
};

export { start };
