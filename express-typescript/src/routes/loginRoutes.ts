import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

/**
 * Require Authentication middleware
 */
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send(`
      <div>
        <h1>Unauthorized</h1>
        <a href="/login">Login</a>
      </div>
    `);
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;
  if (
    !email ||
    !password ||
    email !== 'berimcd@rockt.com.br' ||
    password !== '123456'
  ) {
    res.send('Invalid email or password');
    return;
  }
  // marked user as logged in
  req.session = { loggedIn: true };
  res.redirect('/');
});

router.get('/', (req: Request, res: Response): void => {
  if (!req.session || !req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
    return;
  }

  res.send(`
    <div>
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
    </div>
  `);
});

router.get('/logout', (req: Request, res: Response): void => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response): void => {
  res.send('Welcome to protected route, you are logged in.');
});

export { router };
