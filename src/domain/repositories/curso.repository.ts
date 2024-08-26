// import { CreateCursoDto, UpdateCursoDto } from "../dtos";
import { CursosEntityApplication } from "../entities";



export interface CursoRepository {
    // create(cursoDto: CreateCursoDto): Promise<CursosEntityApplication>;
    getOne(id: number): Promise<CursosEntityApplication>;
    // getByEmail(email: string): Promise<CursosEntityApplication>;
    getAll(): Promise<CursosEntityApplication[]>;
    // update(id: number, change: UpdateCursoDto): Promise<CursosEntityApplication>;
    // delete(id: number): Promise<number>;
}