import { Router } from "express";
import { AdapterRoute } from "../../infraestructure/adapters/express-adapter";
import { makeGetCursosController, makeGetCursoController, makePostFavoritoController } from "../../infraestructure/factory";
import { AuthHandler } from "../middlewares/auth.handler";


export class CursoRoutes{

static get routes(): Router {


const router = Router();


router.get("/", AdapterRoute(makeGetCursosController()));


router.get("/:id", AdapterRoute(makeGetCursoController()));
    

router.post("/favorito",AuthHandler.checkToken, AuthHandler.checkRoles(10), AdapterRoute(makePostFavoritoController()));


return router;

}

}