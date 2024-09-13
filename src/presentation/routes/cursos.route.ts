import { Router } from "express";
import { AdapterRoute } from "../../infraestructure/adapters/express-adapter";
import { makeGetCursosController, makeGetCursoController, makePostFavoritoController, makePostInscritoController } from "../../infraestructure/factory";
import { AuthHandler } from "../middlewares/auth.handler";


export class CursoRoutes{

static get routes(): Router {


const router = Router();


router.get("/", AdapterRoute(makeGetCursosController()));


router.get("/:id", AdapterRoute(makeGetCursoController()));
    

router.post("/favorito",AuthHandler.checkToken, AuthHandler.checkRoles(1,2,3,4,5,6,7,8,9), AdapterRoute(makePostFavoritoController()));


router.post("/inscrito",AuthHandler.checkToken, AuthHandler.checkRoles(1,2,3,4,5,6,7,8,9), AdapterRoute(makePostInscritoController()));




return router;

}

}