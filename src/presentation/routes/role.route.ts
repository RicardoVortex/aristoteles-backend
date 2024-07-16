import { Router } from "express";

import { AdapterRoute } from "../../infraestructure/adapters/express-adapter";
import { getIdSchema } from "../../domain/schemas/role.schema";
import {
  createRoleSchema,
  updateRoleSchema,
} from "../../domain/schemas/role.schema";

import {
  makeCreateRoleController,
  makeDeleteRoleController,
  makeDetailRoleController,
  makeGetRolesController,
  makeUpdateRoleController,
} from "../../infraestructure/factory";

export class RoleRoutes {
  static get routes(): Router {
    const router = Router();

    router.get(
      "/:id",
      getIdSchema.validate,
      AdapterRoute(makeDetailRoleController())
    );

    router.get("/", AdapterRoute(makeGetRolesController()));

    router.delete(
      "/:id",
      getIdSchema.validate,
      AdapterRoute(makeDeleteRoleController())
    );

    router.post(
      "/",
      createRoleSchema.validate,
      AdapterRoute(makeCreateRoleController())
    );

    router.put(
      "/:id",
      updateRoleSchema.validate,
      AdapterRoute(makeUpdateRoleController())
    );

    return router;
  }
}
