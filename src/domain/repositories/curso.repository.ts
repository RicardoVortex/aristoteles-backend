// import { CreateCursoDto, UpdateCursoDto } from "../dtos";
import { plantillasGetsCursos, plantillaGetCurso} from "../entities";



export interface CursoRepository {
    // create(cursoDto: CreateCursoDto): Promise<CursosEntityApplication>;
    getOne(id: number): Promise<plantillaGetCurso>;
    // getByEmail(email: string): Promise<CursosEntityApplication>;
    getAll(): Promise<plantillasGetsCursos[]>;
    // update(id: number, change: UpdateCursoDto): Promise<CursosEntityApplication>;
    // delete(id: number): Promise<number>;
}