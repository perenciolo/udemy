import { Request, Response, NextFunction } from 'express';

import { controller, get, use, post, bodyValidator } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request passed here');
  next();
}

@controller('')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body;
    if (email !== 'berimcd@rockt.com.br' || password !== '123456') {
      res.send('Invalid email or password');
      return;
    }
    // marked user as logged in
    req.session = { loggedIn: true };
    res.redirect('/');
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  }
}
