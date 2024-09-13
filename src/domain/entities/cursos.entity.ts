
import Curso from "../../data/sequelize/models/cursos.model";


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
    foto_id: number
  }

export interface NivelesAll{
  nivel: string
}
export interface InstructorAll{
  nombre: string
  apellido: string
}

export interface fotoAll{
  url: string
  public_id: string
}


export interface CursosTiposApplication extends Partial<Curso>{
    nivel: NivelesAll,
    instructor: InstructorAll,
    categoria: []
    foto: fotoAll
}
export interface plantillasGetsCursos{
id: number | undefined
titulo: string | undefined
descripcion: string | undefined
objetivos: string | undefined
duracion: string | undefined
fecha_inicio: Date | undefined
cupos: number | undefined
foto: fotoAll
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


interface fotoCTA{
  url: string
  public_id: string
}

export interface CursoTipoApplication extends Partial<Curso>{

  nivel: NivelCTA
  requisito: RequisitoCTA[]
  modulo: ModuloCTA[],
  instructor: InstructorCTA
  resena: ResenaCTA
  user: UserCTA[]
  categoria: CategiriaCTA[]
  foto: fotoCTA

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

interface ResenaPl{
  id: string
  calificacion: string
}


interface UserPl{
    names: string
    surnames:  string
    email:  string
    date_birth: Date
    favorito: boolean
}


interface fotoPL{
  url: string
  public_id: string
}



export interface plantillaGetCurso{
      id: number | undefined
      titulo: string | undefined
      descripcion: string | undefined
      objetivos: string | undefined
      duracion: string | undefined
      fecha_inicio: Date | undefined
      cupos: number | undefined
      foto: fotoPL
      nivel: string
      requisito: RequisitoPl[]
      modulo: ModuloPl[],
      instructor: InstructorPl
      resena: ResenaPl
      user: UserPl[]
      categoria: string[]
}

  