import { Router, Request, Response } from 'express';

export const authRouter = Router();

authRouter.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>hello world</h1>
    </div>
  `);
});
