import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

// controlers
import './controllers';
// router
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['jiaouehs'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
