import express, { Response, Request } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>hello world</h1>
    </div>
  `);
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
