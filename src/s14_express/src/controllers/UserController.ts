import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { controller, get, post, use, validate } from './decorators';
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

  @post('/edit')
  @use(bodyParser.urlencoded({ extended: true }))
  @validate('id', 'email')
  getEditProfile(req: Request, res: Response) {
    res.send(`<p>This is the profile edit page</p>`);
  }
}
