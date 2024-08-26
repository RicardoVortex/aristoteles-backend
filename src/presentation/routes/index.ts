import { Router } from "express";

import { AuthRoutes } from "./auth.route";
import { UserRoutes } from "./user.route";
import { RoleRoutes } from "./role.route";
import { CursoRoutes } from "./cursos.route";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/auth", AuthRoutes.routes);
    router.use("/user", UserRoutes.routes);
    router.use("/role", RoleRoutes.routes);
    router.use("/curso", CursoRoutes.routes);

    return router;
  }
}
