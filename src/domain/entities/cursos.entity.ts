
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
export interface NivelesAll {
  nivel: string
}
export interface InstructorAll {
  nombre: string
  apellido: string
}
export interface CursosTiposApplication extends Partial<Curso> {
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
foto: string | undefined
nivel: string
instructor: string
categoria: []
}



interface NivelPl{
  nivel: string
}

interface RequisitoPl{

    id: number
    requisito: string

}


interface ModuloPl{

  id: number
  modulo: string

}


interface InstructorPl{

  nombre: string,
  apellido: string

}

interface CalificacionPl{
  calificacion: string
}

interface ResenaPl{
  resena: string
  calificacion: CalificacionPl
}

interface Lista_deseosPl{
  favorito: boolean
}

interface UserPl{
    names: string
    surnames:  string
    email:  string
    date_birth: Date
    Lista_deseos: Lista_deseosPl
}



export interface CursoTipoApplication extends Partial<Curso> {
  id: number
  titulo: string
  descripcion: string
  objetivos: string
  duracion: number
  fecha_inicio: Date
  foto: string
  nivel: NivelPl
  requisito: RequisitoPl[]
  modulo: ModuloPl[],
  instructor: InstructorPl
  resena: ResenaPl
  user: UserPl[]
  categoria: []

}


export interface plantillaGetCurso{
      id: number
      titulo: string
      descripcion: string
      objetivos: string
      duracion: number
      fecha_inicio: Date
      foto: string
      nivel: string
      requisito: RequisitoPl[]
      modulo: ModuloPl[],
      instructor: InstructorPl
      resena: ResenaPl
      user: UserPl[]
      categoria: []
}

  