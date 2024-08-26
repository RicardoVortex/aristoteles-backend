import {CustomErrorInterface} from "./custom.error.interface";


interface CustomErrorPar extends Partial<CustomErrorInterface>{}

export class CustomError extends Error implements CustomErrorPar{
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly stack?: string
  ) {
    super(message);

    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message: string): CustomErrorInterface {
    return new CustomError(400, message);
  }

  static unauthorized(message: string): CustomErrorInterface  {
    return new CustomError(401, message);
  }

  static forbidden(message: string): CustomErrorInterface  {
    return new CustomError(403, message);
  }

  static notFound(message: string): CustomErrorInterface  {
    return new CustomError(404, message);
  }

  static internalServer(message: string): CustomErrorInterface  {
    return new CustomError(500, message);
  }
}
