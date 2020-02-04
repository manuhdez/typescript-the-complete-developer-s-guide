import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `LOGGER: ${req.method} -> ${req.protocol}://${req.hostname}${req.path}`
  );
  next();
}
