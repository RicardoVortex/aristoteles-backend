import { NextFunction, Request } from "express";

// import { UserEntity } from "../../domain/entities";
import { UserEntityApplication } from "../../domain/entities";

export interface HttpResponse {
  statusCode: number;
  body: any;
  success: boolean;
  message: string;
}

export interface HttpRequest {
  body?: any;
  params?: any;
  query?: any;
  user?: UserEntityApplication;
}
export interface HttpNext {
  next: NextFunction;
}

export interface CustomRequest extends Request {
  user?: UserEntityApplication;
}
