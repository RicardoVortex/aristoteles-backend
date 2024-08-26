import { GetCursosController } from "../../../presentation/controllers/cursos";
import { CursoDataSource } from "../../datasource/curso.datasource";




export const makeGetCursosController = (): GetCursosController => {
    const cursoRepository = new CursoDataSource();

    const getCursos = new GetCursosController(cursoRepository);

    return getCursos;
}