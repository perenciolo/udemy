import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

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

@controller('')
class RootController {
  @get('/')
  getIndex(req: Request, res: Response): void {
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
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send('Welcome to protected route, you are logged in.');
  }
}
