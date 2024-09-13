import { PostInscritoController } from "../../../presentation/controllers/cursos";
import { CursoDataSource } from "../../datasource/curso.datasource";




export const makePostInscritoController = (): PostInscritoController => {
    const cursoRepository = new CursoDataSource();

    const postInscrito = new PostInscritoController(cursoRepository);

    return postInscrito;
}