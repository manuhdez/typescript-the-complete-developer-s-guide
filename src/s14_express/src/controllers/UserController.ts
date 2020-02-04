import { controller, get } from './decorators';
import { Request, Response } from 'express';
import { use } from './decorators';
import { logger } from '../middleware/logger';

@controller('/user')
export class UserController {
  @get('/profile')
  @use(logger)
  getUserProfile(req: Request, res: Response) {
    res.send(`
    <h1>hello user</h1>
    `);
  }

  @get('/edit')
  getEditProfile(req: Request, res: Response) {
    res.send(`<p>This is the profile edit page</p>`);
  }
}
