// import { CreateCursoDto, UpdateCursoDto } from "../dtos";
import { plantillaGetCurso, plantillasGetsCursos, ListaDeseosEntityApplication, InscritoEntityApplication } from "../entities";
import { GetCursoDto, PostFavoritoDto, PostInscritoDto } from "../dtos/curso.dto";



export interface CursoRepository {
    getOne(id: number): Promise<plantillaGetCurso>;
    // getByEmail(email: string): Promise<CursosEntityApplication>;
    getAll(filtro:GetCursoDto): Promise<plantillasGetsCursos[]>;
    // update(id: number, change: UpdateCursoDto): Promise<CursosEntityApplication>;
    // delete(id: number): Promise<number>;
    createFavorito(favoritoDto: PostFavoritoDto): Promise<ListaDeseosEntityApplication>;
    createInscrito(inscritoDto: PostInscritoDto): Promise<InscritoEntityApplication | undefined>;
}