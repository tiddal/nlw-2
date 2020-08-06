import express from 'express';
import cors from 'cors';
import { classes } from './routes/classes';
import { connections } from './routes/connections';

const app = express();

app.use(cors());
app.use(express.json());
app.use(classes);
app.use(connections);

export { app };