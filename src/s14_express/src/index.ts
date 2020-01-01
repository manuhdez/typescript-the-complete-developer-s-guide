import express from 'express';
import bodyParser from 'body-parser';

// routes
import { authRouter } from './routes/authRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(authRouter);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
