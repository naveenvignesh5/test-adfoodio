import express, { Express, Request, Response } from 'express';

// routes
import menu from './routes/menu';

const port = process.env.NODE_PORT || 4848;

export function run() {
  const app: Express = express();

  app.use(express.static('public'));

  app.use('/menu', menu);

  app.get('/', function (req: Request, res: Response) {
    res.type('text/plain').send('Food can be served');
  });

  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  });
}

if (process.env.NODE_ENV !== 'testing') {
  run();
}
