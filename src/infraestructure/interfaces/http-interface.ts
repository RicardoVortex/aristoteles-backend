import { NextFunction, Request } from "express";

import { UserEntity } from "../../domain/entities";

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
  user?: UserEntity;
}
export interface HttpNext {
  next: NextFunction;
}

export interface CustomRequest extends Request {
  user?: UserEntity;
}
