import express from 'express';
import { authRouter } from './routes/authRoutes';

const app = express();

app.use(authRouter);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
