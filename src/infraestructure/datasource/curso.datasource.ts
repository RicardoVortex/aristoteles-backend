import { CursosEntityApplication } from "../../domain/entities";
import { CursoRepository } from "../../domain/repositories";
import { CustomError } from "../../domain/errors/custom.error";
import Curso from "../../data/sequelize/models/cursos.model";
import Nivel from "../../data/sequelize/models/niveles.model";
import Instructor from "../../data/sequelize/models/instructores.model";
import Resena from "../../data/sequelize/models/resena.model";
import Modulo from "../../data/sequelize/models/modulos.model";
import User from "../../data/sequelize/models/user.model";
// import Role from "../../data/sequelize/models/rol.model";
import Calificacion from "../../data/sequelize/models/calificaciones.model";
import Requisito from "../../data/sequelize/models/requisito.model";
import Categoria from "../../data/sequelize/models/categoria.model";
// import Cursos from "../../data/sequelize/models/cursos.model";





export class CursoDataSource implements CursoRepository {
    async getOne(id: number): Promise<CursosEntityApplication> {
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
                as: "modulo",
                attributes: ["modulo"],
                model: Modulo,
                through: {attributes:[]}
            },
            {
                as: "user",
                attributes: ["names", "surnames", "email", "date_birth"],
                model: User,
                through: {attributes:["favorito"]}
            },
            {
                as: "requisito",
                attributes: ["requisito"],
                model: Requisito,
                through: {attributes: []}
            },
            {
                as: "nivel",
                attributes: ["nivel"],
                model: Nivel
            },
            {
                as: "categoria",
                attributes: ["categoria"],
                model: Categoria
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
            }
        ], where: { id }});
      
        if (!curso) throw CustomError.badRequest("El Curso no Existe");
      

        
// const salida:CursosTiposApplication = {
//     id: curso.id,
//     titulo: curso.titulo,
//     descripcion: curso.descripcion,
//     objetivos: curso.objetivos,
//     duracion: curso.duracion,
//     fecha_inicio: curso.fecha_inicio,
//     foto: curso.foto,
//     // nivel_id: curso.nivel_id,
//     // resena_id: curso.resena_id
// }

//         return salida;


        return curso;


    }
    async getAll(): Promise<CursosEntityApplication[]> {
        const cursos = await Curso.findAll({
            attributes: [
                "id",
                "titulo",
                "duracion",
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
      


        return cursos.map((cursos) => cursos);



// const salida:CursosTiposApplication = {
//     id: cursos.id,
//     titulo: cursos.titulo,
//     descripcion: cursos.descripcion,
//     objetivos: cursos.objetivos,
//     duracion: cursos.duracion,
//     fecha_inicio: cursos.fecha_inicio,
//     foto: cursos.foto,
//     // nivel_id: curso.nivel_id,
//     // resena_id: curso.resena_id
// }

//         return salida;



// return cursos;



// const arreglo1 = cursos.map((Curso)=> {

//     Curso as CursoTipoApplication

// const salida:CursoTipoApplication = {
//     id: Curso.id,
//     titulo: Curso.titulo,
//     descripcion: Curso.descripcion,
//     objetivos: Curso.objetivos,
//     duracion: Curso.duracion,
//     fecha_inicio: Curso.fecha_inicio,
//     foto: Curso.foto,
//     nivel: Curso.nivel_id,
//     instructor: Curso.instructor_id,
//     categoria: []
// }

// return salida;

// })

// return arreglo1;





    }

}