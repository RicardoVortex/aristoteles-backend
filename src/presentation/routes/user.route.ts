import { Router } from "express";

import { AdapterRoute } from "../../infraestructure/adapters/express-adapter";
import { getIdSchema } from "../../domain/schemas/user.schema";

import {
  makeDeleteUserController,
  makeGetUserController,
  makeGetUsersController,
  makeRegisterUserController,
  makeUpdateUserController,
} from "../../infraestructure/factory";

import {
  registerUserSchema,
  updateUserSchema,
} from "../../domain/schemas/user.schema";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    router.get(
      "/:id",
      getIdSchema.validate,
      AdapterRoute(makeGetUserController())
    );

    router.get("/", AdapterRoute(makeGetUsersController()));

    router.post(
      "/register",
      registerUserSchema.validate,
      AdapterRoute(makeRegisterUserController())
    );

    router.put(
      "/:id",
      updateUserSchema.validate,
      AdapterRoute(makeUpdateUserController())
    );

    router.patch(
      "/change-status/:id",
      getIdSchema.validate,
      AdapterRoute(makeUpdateUserController())
    );

    router.delete(
      "/:id",
      getIdSchema.validate,
      AdapterRoute(makeDeleteUserController())
    );

    return router;
  }
}
