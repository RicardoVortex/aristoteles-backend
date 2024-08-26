import { GetCursoController } from "../../../presentation/controllers/cursos";
import { CursoDataSource } from "../../datasource/curso.datasource";





export const makeGetCursoController = (): GetCursoController => {
    const cursoRepository = new CursoDataSource();

    const getCurso = new GetCursoController(cursoRepository);
    
    return getCurso;
}