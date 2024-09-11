
import Curso from "../../data/sequelize/models/cursos.model";
import { DeepWriteable } from "sequelize/types/utils";


// export class CursosEntity{


//     constructor(
//         public id: number,
//         public titulo: string,
//         public descripcion: string,
//         public objetivos: string,
//         public duracion: number,
//         public nivel_id: number,
//         public instructor_id: number,
//         public fecha_inicio: Date,
//         public resena_id: number,
//         public cupos: number,
//         public foto: string
//      ){}
    
    
//     static fromObject(object: {[key: string]: any}): CursosEntity {
    
//     const {
//         id,
//         titulo,
//         descripcion,
//         objetivos,
//         duracion,
//         nivel_id,
//         instructor_id,
//         fecha_inicio,
//         resena_id,
//         cupos,
//         foto
//     } = object;
    
    
//     return new CursosEntity(
//         id,
//         titulo,
//         descripcion,
//         objetivos,
//         duracion,
//         nivel_id,
//         instructor_id,
//         fecha_inicio,
//         resena_id,
//         cupos,
//         foto
//     );
        
//     }
    
        
//     }


export interface CursosEntityApplication{
    id: number,
    titulo: string,
    descripcion: string,
    objetivos: string,
    duracion: number,
    nivel_id: number,
    instructor_id: number,
    fecha_inicio: Date,
    resena_id: number,
    cupos: number,
    foto: string
  }
  

  export interface CursosSalidaApplication extends Omit<CursosEntityApplication, "instructor_id">{


  }
export interface leer{

readonly dato1: string
readonly dato2: string


}


export interface Escribir extends DeepWriteable<leer>{



}
export interface NivelesAll{
  nivel: string
}
export interface InstructorAll{
  nombre: string
  apellido: string
}
export interface CursosTiposApplication extends Partial<Curso>{
    nivel: NivelesAll,
    instructor: InstructorAll,
    categoria: []
}
export interface plantillasGetsCursos{
id: number | undefined
titulo: string | undefined
descripcion: string | undefined
objetivos: string | undefined
duracion: string | undefined
fecha_inicio: Date | undefined
cupos: number | undefined
foto: string | undefined
nivel: string
instructor: string
categoria: []
}



interface NivelCTA{
  nivel: string
}

interface RequisitoCTA{
    id: number
    requisito: string
}

interface LeccionCTA{
  id: number,
  leccion: string
}


interface ModuloCTA{
  id: number
  modulo: string
  leccion: LeccionCTA[]
}


interface InstructorCTA{
  nombre: string,
  apellido: string
}

interface CalificacionCTA{
  calificacion: string
}

interface ResenaCTA{
  resena: string
  calificacion: CalificacionCTA
}

interface Lista_deseosCTA{
  favorito: boolean
}

interface UserCTA{
    names: string
    surnames:  string
    email:  string
    date_birth: Date
    Lista_deseos: Lista_deseosCTA
}

interface Categorias_cursosCTA{
        id: number
        curso_id: number
        categoria_id: number
        createdAt: Date
        updatedAt: Date
}

interface CategiriaCTA{
    categoria: string
    Categorias_cursos: Categorias_cursosCTA
}

export interface CursoTipoApplication extends Partial<Curso>{

  nivel: NivelCTA
  requisito: RequisitoCTA[]
  modulo: ModuloCTA[],
  instructor: InstructorCTA
  resena: ResenaCTA
  user: UserCTA[]
  categoria: CategiriaCTA[]

}


interface RequisitoPl{

    id: number
    requisito: string

}

interface LeccionPL{
  id: number,
  leccion: string
}

interface ModuloPl{
  id: number
  modulo: string
  leccion: LeccionPL[]
}


interface InstructorPl{

  nombre: string,
  apellido: string

}

// interface CalificacionPl{
//   calificacion: string
// }

interface ResenaPl{
  id: string
  // calificacion: CalificacionPl
  calificacion: string
}

// interface Lista_deseosPl{
//   favorito: boolean
// }

interface UserPl{
    names: string
    surnames:  string
    email:  string
    date_birth: Date
    favorito: boolean
}

// interface Categorias_cursosPl{
//   id: number
//   curso_id: number
//   categoria_id: number
//   createdAt: Date
//   updatedAt: Date
// }


// interface CategiriaPl{
//   categoria: string
//   Categorias_cursos: Categorias_cursosPl
// }




export interface plantillaGetCurso{
      id: number | undefined
      titulo: string | undefined
      descripcion: string | undefined
      objetivos: string | undefined
      duracion: string | undefined
      fecha_inicio: Date | undefined
      cupos: number | undefined
      foto: string | undefined
      nivel: string
      requisito: RequisitoPl[]
      modulo: ModuloPl[],
      instructor: InstructorPl
      resena: ResenaPl
      user: UserPl[]
      categoria: string[]
}

  