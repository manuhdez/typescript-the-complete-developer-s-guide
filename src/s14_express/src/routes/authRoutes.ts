import { Router, Request, Response, NextFunction } from 'express';

export const authRouter = Router();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.session && req.session.authenticated) {
    next();
    return;
  }

  res.status(403).send('<h1>Not permitted</h1>');
}

authRouter.get('/', (req: RequestWithBody, res: Response) => {
  if (req.session && req.session.authenticated) {
    res.status(200).send(`
      <div>
        <p>You are logged in</p>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.status(200).send(`
      <div>
        <h1>You are not logged in</h1>
        <a href="/login">Login</a>
      </div>
    `);
  }
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

authRouter.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'user@mail.com' && password === 'secret') {
    req.session = { authenticated: true };
    res.redirect('/');
  } else {
    res.status(301).send(`
      <p>invalid email or password</p>
      <a href="/login">Try again</a>
    `);
  }
});

authRouter.get('/logout', (req: RequestWithBody, res: Response) => {
  if (req.session) {
    req.session = undefined;
  }

  res.status(301).redirect('/');
});

authRouter.get(
  '/protected',
  authMiddleware,
  (req: RequestWithBody, res: Response) => {
    res.status(200).send('Welcome to protected route user!');
  }
);
