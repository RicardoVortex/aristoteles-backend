import {CustomErrorInt} from "./custom.error.int";


interface CustomErrorPar extends Partial<CustomErrorInt>{}

export class CustomError extends Error implements CustomErrorPar{
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly stack?: string
  ) {
    super(message);

    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message: string): CustomErrorInt {
    return new CustomError(400, message);
  }

  static unauthorized(message: string): CustomErrorInt  {
    return new CustomError(401, message);
  }

  static forbidden(message: string): CustomErrorInt  {
    return new CustomError(403, message);
  }

  static notFound(message: string): CustomErrorInt  {
    return new CustomError(404, message);
  }

  static internalServer(message: string): CustomErrorInt  {
    return new CustomError(500, message);
  }
}
