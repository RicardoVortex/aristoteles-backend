// import { CreateCursoDto, UpdateCursoDto } from "../dtos";
import { plantillasGetsCursos, plantillaGetCurso} from "../entities";
import { GetCursoDto} from "../dtos/curso.dto";



export interface CursoRepository {
    // create(cursoDto: CreateCursoDto): Promise<CursosEntityApplication>;
    getOne(id: number): Promise<plantillaGetCurso>;
    // getByEmail(email: string): Promise<CursosEntityApplication>;
    getAll(filtro:GetCursoDto): Promise<plantillasGetsCursos[]>;
    // update(id: number, change: UpdateCursoDto): Promise<CursosEntityApplication>;
    // delete(id: number): Promise<number>;
}