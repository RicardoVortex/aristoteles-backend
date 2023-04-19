import { NextFunction, Request, Response } from "express";

import  { ValidationError } from "sequelize"

export function logErrors(err: any, req: Request, res: Response, next: NextFunction){
  console.log("🚀 ~ file: error.handler.ts:6 ~ logErrors ~ err:", err)
  // console.log(err);
  next(err);
}
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction){
  res.status(500).json({
    success: true,
    message: err.message,
    stack: err.stack,

  })
}
export function boomErrorHandler(err: any, req: Request, res: Response, next: NextFunction){
  console.log('error boom');
  if(err.isBoom){
    const {output} = err
    console.log({output});
    res.status(output.statusCode).json({
      success: false,
      message: output.payload.message,
      body: {}
    })
  }
  next(err)
}

export function ormErrorHandler(err: any, req: Request, res: Response, next: NextFunction){
  if(err instanceof ValidationError){
    res.status(409).json({
      success: false,
      message: err.name,
      errors: err.errors
    })
  }
  next(err)
}


