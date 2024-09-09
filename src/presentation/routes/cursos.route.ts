import { Router } from "express";
import { AdapterRoute } from "../../infraestructure/adapters/express-adapter";
import { makeGetCursosController, makeGetCursoController, makePostFavoritoController } from "../../infraestructure/factory";



export class CursoRoutes{

static get routes(): Router {


const router = Router();


router.get("/", AdapterRoute(makeGetCursosController()));


router.get("/:id", AdapterRoute(makeGetCursoController()));
    

router.post("/favorito", AdapterRoute(makePostFavoritoController()));


return router;

}

}