import { CursosEntityApplication } from "../../domain/entities";
import { CursoRepository } from "../../domain/repositories";
import { CustomError } from "../../domain/errors/custom.error";
import Curso from "../../data/sequelize/models/cursos.model";
import Nivel from "../../data/sequelize/models/niveles.model";
import Instructor from "../../data/sequelize/models/instructores.model";
import Resena from "../../data/sequelize/models/resena.model";
import Modulo from "../../data/sequelize/models/modulos.model";
import User from "../../data/sequelize/models/user.model";
import Role from "../../data/sequelize/models/rol.model";
import Calificacion from "../../data/sequelize/models/calificaciones.model";
import Requisito from "../../data/sequelize/models/requisito.model";
import Categoria from "../../data/sequelize/models/categoria.model";





export class CursoDataSource implements CursoRepository {
    async getOne(id: number): Promise<CursosEntityApplication> {
        const curso = await Curso.findOne({      
            attributes: [
            "id",
            "titulo",
            "descripcion",
            "objetivos",
            "duracion",
            "nivel_id",
            "instructor_id",
            "fecha_inicio",
            "resena_id",
            "foto"
          ],
          include: [
            {
                as: "modulo",
                attributes: ["id", "modulo"],
                model: Modulo
            },
            {
                as: "user",
                attributes: ["id", "names", "surnames", "email", "date_birth", "role_id", "password"],
                model: User,
                include: [{
                    as: "role",
                    attributes: ["id", "name", "description"],
                    model: Role
                }]
            },
            {
                as: "requisito",
                attributes: ["id", "requisito"],
                model: Requisito
            },
            {
                as: "nivel",
                attributes: ["id", "nivel"],
                model: Nivel
            },
            {
                as: "categoria",
                attributes: ["id", "categoria"],
                model: Categoria
            },
            {
                as: "instructor",
                attributes: ["id", "nombre", "apellido"],
                model: Instructor
            },
            {
                as: "resena",
                attributes: ["id", "calificacion_id", "resena", "user_id"],
                model: Resena,
                include: [{
                    as: "calificacion",
                    attributes: ["id", "calificacion"],
                    model: Calificacion
                },
                {
                    as: "user",
                    attributes: ["id", "names", "surnames", "email", "date_birth", "role_id", "password"],
                    model: User,
                    include: [{
                        as: "role",
                        attributes: ["id", "name", "description"],
                        model: Role
                    }]
                }
            ]
            }
        ], where: { id }});
      
        if (!curso) throw CustomError.badRequest("El Curso no Existe");
      
        return curso;
    }
    async getAll(): Promise<CursosEntityApplication[]> {
        const cursos = await Curso.findAll({
            attributes: [
                "id",
                "titulo",
                "duracion",
                "nivel_id",
                "instructor_id",
                "foto"
              ],
            include: [
                {
                    as: "nivel",
                    attributes: ["id", "nivel"],
                    model: Nivel
                },
                {
                    as: "instructor",
                    attributes: ["id", "nombre", "apellido"],
                    model: Instructor
                },
                {
                    as: "categoria",
                    attributes: ["id", "categoria"],
                    model: Categoria
                }
            ]
          });
      
        return cursos.map((cursos) => cursos);
    }

}