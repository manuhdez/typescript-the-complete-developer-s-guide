import { Request, Response, NextFunction } from 'express';

export function requireAuth(
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
