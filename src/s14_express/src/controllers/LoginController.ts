import { Request, Response } from 'express';
import { get, controller } from './decorators';

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
}
