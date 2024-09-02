import { CursosTiposApplication, CursoTipoApplication, plantillasGetsCursos, plantillaGetCurso } from "../../domain/entities";
import { CursoRepository } from "../../domain/repositories";
import { CustomError } from "../../domain/errors/custom.error";
import Curso from "../../data/sequelize/models/cursos.model";
import Nivel from "../../data/sequelize/models/niveles.model";
import Instructor from "../../data/sequelize/models/instructores.model";
import Resena from "../../data/sequelize/models/resena.model";
import Modulo from "../../data/sequelize/models/modulos.model";
import User from "../../data/sequelize/models/user.model";
import Calificacion from "../../data/sequelize/models/calificaciones.model";
import Requisito from "../../data/sequelize/models/requisito.model";
import Categoria from "../../data/sequelize/models/categoria.model";





export class CursoDataSource implements CursoRepository {
    async getOne(id: number): Promise<plantillaGetCurso> {
        const curso = await Curso.findOne({      
            attributes: [
            "id",
            "titulo",
            "descripcion",
            "objetivos",
            "duracion",
            "fecha_inicio",
            "foto"
          ],
          include: [
            {
                as: "nivel",
                attributes: ["nivel"],
                model: Nivel
            },
            {
                as: "requisito",
                attributes: ["id", "requisito"],
                model: Requisito,
                through: {attributes: []}
            },
            {
                as: "modulo",
                attributes: ["id", "modulo"],
                model: Modulo,
                through: {attributes:[]}
            },
            {
                as: "instructor",
                attributes: ["nombre", "apellido"],
                model: Instructor
            },
            {
                as: "resena",
                attributes: ["resena"],
                model: Resena,
                include: [{
                    as: "calificacion",
                    attributes: ["calificacion"],
                    model: Calificacion
                },
                // {
                //     as: "user",
                //     attributes: ["names", "surnames", "email", "date_birth", "password"],
                //     model: User,
                //     include: [{
                //         as: "role",
                //         attributes: ["name", "description"],
                //         model: Role
                //     }]
                // }
            ]
            },
            {
                as: "user",
                attributes: ["names", "surnames", "email", "date_birth"],
                model: User,
                through: {attributes:["favorito"]}
            },
            {
                as: "categoria",
                attributes: ["categoria"],
                model: Categoria
            }
        ], where: { id }});
      
        if (!curso) throw CustomError.badRequest("El Curso no Existe");


        const getCurso = curso as CursoTipoApplication

const salida:plantillaGetCurso = {
        id: getCurso.id,
        titulo: getCurso.titulo,
        descripcion: getCurso.descripcion,
        objetivos: getCurso.objetivos,
        duracion: getCurso.duracion,
        nivel: getCurso.nivel.nivel,
        requisito: getCurso.requisito,
        modulo: getCurso.modulo,
        instructor: {
            nombre: getCurso.instructor.nombre,
            apellido: getCurso.instructor.apellido
        },
        fecha_inicio: getCurso.fecha_inicio,
        resena: {
            resena: getCurso.resena.resena,
            calificacion: {
                calificacion: getCurso.resena.calificacion.calificacion
            }
        },
        foto: getCurso.foto,
        user: getCurso.user,
        categoria: getCurso.categoria
}

return salida;

//         return curso;


    }
    async getAll(): Promise<plantillasGetsCursos[]> {
        const cursos = await Curso.findAll({
            attributes: [
                "id",
                "titulo",
                "descripcion",
                "objetivos",
                "duracion",
                "fecha_inicio",
                "foto"
              ],
            include: [
                {
                    as: "nivel",
                    attributes: ["nivel"],
                    model: Nivel
                },
                {
                    as: "instructor",
                    attributes: ["nombre", "apellido"],
                    model: Instructor
                },
                {
                    as: "categoria",
                    attributes: ["categoria"],
                    model: Categoria
                }
            ]
          });
      


        // return cursos.map((cursos) => cursos);

const arregloCursos = cursos.map((curso)=> {

const getCursos = curso as CursosTiposApplication

const salida:plantillasGetsCursos = {
    id: getCursos.id,
    titulo: getCursos.titulo,
    descripcion: getCursos.descripcion,
    objetivos: getCursos.objetivos,
    duracion: getCursos.foto,
    fecha_inicio: getCursos.fecha_inicio,
    foto: getCursos.foto,
    nivel: getCursos.nivel.nivel,
    instructor: `${getCursos.instructor.nombre} ${getCursos.instructor.apellido}`,
    categoria: getCursos.categoria
}

return salida;

})

return arregloCursos;



    }

}