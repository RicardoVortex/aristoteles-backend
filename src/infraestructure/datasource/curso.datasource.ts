import { CursosEntityApplication } from "../../domain/entities";
import { CursoRepository } from "../../domain/repositories";
import { CustomError } from "../../domain/errors/custom.error";
import Curso from "../../data/sequelize/models/cursos.model";





export class CursoDataSource implements CursoRepository {
    async getOne(id: number): Promise<CursosEntityApplication> {
        const curso = await Curso.findOne({where: { id }});
      
        if (!curso) throw CustomError.badRequest("El Curso no Existe");
      
        return curso;
    }
    async getAll(): Promise<CursosEntityApplication[]> {
        const cursos = await Curso.findAll();
      
        return cursos.map((cursos) => cursos);
    }

}