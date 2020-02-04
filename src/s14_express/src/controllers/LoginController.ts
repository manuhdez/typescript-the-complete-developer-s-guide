import { Request, Response } from 'express';
import { RequestWithBody } from '../types';
import { controller, get, post, validate } from './decorators';

@controller('/auth')
export class LoginController {
  /**
   * Resolves the GET request for the /login route
   */
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <h3>Login</h3>
      <form method="POST">
        <div>
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Log in</button>
      </form>
    `);
  }

  @post('/login')
  @validate('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (email === 'my@email.com' && password === '1234') {
      req.session = { authenticated: true };
      res.redirect('/');
    } else {
      res.status(301).send(`
        <p>invalid email or password</p>
        <a href="/login">Try again</a>
      `);
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    if (req.session) {
      req.session = undefined;
    }

    res.status(301).redirect('/');
  }
}
