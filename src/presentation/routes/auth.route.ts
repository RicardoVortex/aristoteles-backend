import { Router } from "express";

import { AdapterRoute } from "../../infraestructure/adapters/express-adapter";

import {
  changePasswordSchema,
  loginSchema,
  recoveryPassSchema,
  validateCodeSchema,
} from "../../domain/schemas/auth.schema";

import {
  makeChangePasswordController,
  makeLoginUserController,
  makeLogOutUserController,
  makeRecoveryPasswordController,
  makeValidateCodeController,
} from "../../infraestructure/factory";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    router.get("/logout", AdapterRoute(makeLogOutUserController()));

    router.post(
      "/login",
      loginSchema.validate,
      AdapterRoute(makeLoginUserController())
    );

    router.post(
      "/validate-code",
      validateCodeSchema.validate,
      AdapterRoute(makeValidateCodeController())
    );

    router.post(
      "/recovery",
      recoveryPassSchema.validate,
      AdapterRoute(makeRecoveryPasswordController())
    );

    router.post(
      "/change-password",
      changePasswordSchema.validate,
      AdapterRoute(makeChangePasswordController())
    );

    return router;
  }
}
