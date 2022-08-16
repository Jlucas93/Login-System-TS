import { RequestHandler } from "express"
import User from '../Interfaces/User'


declare module 'express-session' {
  interface SessionData {
    user: User
  }
}
const isLogged: RequestHandler = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json("Não está logado");
  }
  return next();
}
export default isLogged