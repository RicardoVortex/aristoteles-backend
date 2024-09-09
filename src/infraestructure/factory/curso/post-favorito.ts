import { PostFavoritoController } from "../../../presentation/controllers/cursos";
import { CursoDataSource } from "../../datasource/curso.datasource";




export const makePostFavoritoController = (): PostFavoritoController => {
    const cursoRepository = new CursoDataSource();

    const postFavorito = new PostFavoritoController(cursoRepository);

    return postFavorito;
}