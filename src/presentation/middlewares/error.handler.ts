import { NextFunction, Request, Response } from "express";
import { ValidationError } from "sequelize";

import { CustomError } from "../../domain/errors/custom.error";

export class ErrorHandler {
  static logErrors(
    err: any,
    _req: Request,
    _res: Response,
    next: NextFunction
  ) {
    console.log("🚀 ~ file: error.handler.ts:6 ~ logErrors ~ err:", err);

    next(err);
  }

  static errorHandler(
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    res.status(500).json({
      success: true,
      message: err.message,
      stack: err.stack,
    });
  }

  static customErrorHandler(
    err: any,
    _req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (err instanceof CustomError) {
      const { message, statusCode, stack } = err;

      res.status(statusCode).json({
        success: false,
        message: message,
        stack,
      });
    } else {
      next(err);
    }
  }

  static ormErrorHandler(
    err: any,
    _req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (err instanceof ValidationError) {
      res.status(409).json({
        success: false,
        message: err.name,
        errors: err.errors,
      });
    } else {
      next(err);
    }
  }
}
