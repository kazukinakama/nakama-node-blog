import { pool } from 'database/connection';
import express, { Application, json, Request, Response } from 'express';

export const app: Application = express();

app.use(json());

pool
  .getConnection()
  .then((connection) => console.log('connected as id ' + connection.threadId))
  .catch((error) => console.error(error.stack));

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});
