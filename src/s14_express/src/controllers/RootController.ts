import { Response } from 'express';
import { controller, get, use } from './decorators';
import { requireAuth } from '../middleware';
import { RequestWithBody } from '../types';

@controller('')
export class RootController {
  @get('/')
  getRoot(req: RequestWithBody, res: Response) {
    if (req.session && req.session.authenticated) {
      res.status(200).send(`
        <div>
          <h1>You are logged in</h1>
          <a href="auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.status(200).send(`
        <div>
          <h1>You are not logged in</h1>
          <a href="auth/login">Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: RequestWithBody, res: Response) {
    res.status(200).send('Welcome to protected route user!');
  }
}
