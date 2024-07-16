import { NextFunction, Request, Response } from "express";

import { CustomError } from "../../domain/errors/custom.error";
import { UserEntity } from "../../domain/entities";

import {
  AuthDataSource,
  UserDataSource,
} from "../../infraestructure/datasource";

import { HttpRequest } from "../../infraestructure/interfaces/http-interface";

export class AuthHandler {
  static checkAdminRole = (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    const user: UserEntity = req.user!;

    if (user.role_id === 1) {
      next();
    } else {
      next(CustomError.unauthorized("Acceso denegado"));
    }
  };

  static checkToken = async (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    let token = null;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      throw CustomError.forbidden("El token es requerido.");
    }

    const decodedToken = new AuthDataSource().verifyToken(token);

    const user = await new UserDataSource().getOne(decodedToken.id);

    req.user = user;

    next();
  };

  static checkRoles = (...roles: number[]) => {
    return (req: HttpRequest, _res: Response, next: NextFunction) => {
      const user: any = req.user;

      if (roles.includes(parseInt(user.role_id))) {
        next();
      } else {
        next(CustomError.unauthorized("No tiene los permisos necesarios"));
      }
    };
  };
}
