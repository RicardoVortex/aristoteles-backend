import { CursoTipoApplication, CursosTiposApplication, plantillaGetCurso, plantillasGetsCursos } from "../../domain/entities";
import { CursoRepository } from "../../domain/repositories";
import { CustomError } from "../../domain/errors/custom.error";
import { GetCursoDto } from "../../domain/dtos/curso.dto";
import Curso from "../../data/sequelize/models/cursos.model";
import Nivel from "../../data/sequelize/models/niveles.model";
import Instructor from "../../data/sequelize/models/instructores.model";
import Resena from "../../data/sequelize/models/resena.model";
import Modulo from "../../data/sequelize/models/modulos.model";
import Leccion from "../../data/sequelize/models/leccion.model";
import User from "../../data/sequelize/models/user.model";
import Calificacion from "../../data/sequelize/models/calificaciones.model";
import Requisito from "../../data/sequelize/models/requisito.model";
import Categoria from "../../data/sequelize/models/categoria.model";
// import { WhereOptions } from "sequelize";
import { Op } from "sequelize";




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
                through: {attributes:[]},
                include:[{
                as: "leccion",
                attributes: ["id", "leccion"],
                model: Leccion,
                through: {attributes:[]}
                }]
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
                model: Categoria,
                through: {attributes:[]}
            }
        ], where: { id }});
      
        if (!curso) throw CustomError.badRequest("El Curso no Existe");


        const getCurso = curso as CursoTipoApplication


        const arregloCategoria = getCurso.categoria.map((valor)=>{return valor.categoria})
        
        const arregloModulo = getCurso.modulo.map((valor)=>{
            return {
                id: valor.id,
                modulo: valor.modulo,
                leccion: valor.leccion.map((valor)=>{
                    return {
                        id: valor.id,
                        leccion: valor.leccion
                    }
                })
            }
        })

        const arregloUser = getCurso.user.map((valor)=>{return {
            names: valor.names,
            surnames: valor.surnames,
            email: valor.email,
            date_birth: valor.date_birth,
            favorito: valor.Lista_deseos.favorito,
        }})

const salida:plantillaGetCurso = {
        id: getCurso.id,
        titulo: getCurso.titulo,
        descripcion: getCurso.descripcion,
        objetivos: getCurso.objetivos,
        duracion: `${getCurso.duracion}h`,
        nivel: getCurso.nivel.nivel,
        requisito: getCurso.requisito,
        modulo: arregloModulo,
        instructor: {
            nombre: getCurso.instructor.nombre,
            apellido: getCurso.instructor.apellido
        },
        fecha_inicio: getCurso.fecha_inicio,
        resena: {
            id: getCurso.resena.resena,
            calificacion: getCurso.resena.calificacion.calificacion
        },
        foto: getCurso.foto,
        user: arregloUser,
        categoria: arregloCategoria
}

return salida;

//         return curso;


    }
    async getAll(filtro:GetCursoDto): Promise<plantillasGetsCursos[]> {
        const cursos = await Curso.findAll({
            
            where: {titulo: {[Op.like]:`%${filtro.titulo}%`}},
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
                    where: filtro.nivel==="" ? {} : {id: filtro.nivel},
                    as: "nivel",
                    attributes: ["nivel"],
                    model: Nivel
                },
                {
                    where: {nombre: {[Op.like]:`%${filtro.instructor}%`}},
                    as: "instructor",
                    attributes: ["nombre", "apellido"],
                    model: Instructor
                },
                {
                    as: "categoria",
                    attributes: ["categoria"],
                    model: Categoria,
                    where: filtro.categoria==="" ? {} : {id: filtro.categoria}
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