import { Router, Request, Response, response } from 'express';

export const authRouter = Router();

authRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send(`
    <div>
      <h1>hello world</h1>
    </div>
  `);
});

authRouter.get('/login', (req: Request, res: Response) => {
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
});

authRouter.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.status(200).send(email + password);
});
