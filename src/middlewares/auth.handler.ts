import boom  from '@hapi/boom'
import { NextFunction, Request, Response } from 'express';
import  { config } from '../config'
// import  { api_key } = config

// function checkApiKey ( req, res, next){
//   const apiKey = req.headers['api']
//   if(apiKey === api_key ){
//     next()
//   }else {
//     next(boom.unauthorized())
//   }

// }

export function checkAdminRole(req: Request, res: Response, next: NextFunction){
  const user: any = req.user;
  if(user.role === 'admin'){
    next()
  }else {
    next(boom.unauthorized())
  }
}

export function checkRoles (...roles: number[]){
  return (req: Request, res: Response, next: NextFunction ) => {
    const user: any = req.user;
  if(roles.includes(parseInt(user.role))){
    next()
  }else {
    next(boom.unauthorized('No tiene los permisos necesarios'))
  }
  }
}


