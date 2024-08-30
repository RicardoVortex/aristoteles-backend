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

interface ListaFavorito{

favorito: boolean

}

  interface Modulopar{

    modulo:string
  }

  interface Userpar{

    
      names: string,
      surnames: string,
      email: string,
      date_birth: Date,
      Lista_deseos: ListaFavorito
  
  }

  interface Requisitopar{

    
    names: string,
    surnames: string,
    email: string,
    date_birth: Date,
    Lista_deseos: ListaFavorito

}


interface Nivelpar{
  names: string,
  surnames: string,
  email: string,
  date_birth: Date,
  Lista_deseos: ListaFavorito
}



interface Instructorpar{
    nombre: string
    apellido: string
}

interface Resenapar{
    resena: string,
    calificacion: object
}


// interface BodyContent{

//     id: number
//     titulo: string
//     descripcion: string
//     objetivos: string
//     duracion: number
//     fecha_inicio: Date
//     foto: string,
//     modulo: Modulopar[]
//     user: Userpar[]
//     requisito: Requisitopar[]
//     nivel: Nivelpar
//     categoria: []
//     instructor: Instructorpar
//     resena: Resenapar

// }



  export interface CursosTiposApplication extends Partial<Curso> {


      body?: {
          id: number,
          titulo: string,
          descripcion: string,
          objetivos: string,
          duracion: number,
          fecha_inicio: Date,
          foto: string,
          modulo: Modulopar[],
          user: Userpar[],
          requisito: Requisitopar[],
          nivel: Nivelpar,
          categoria: [],
          instructor: Instructorpar,
          resena: Resenapar
      }
  



    
  }

  // interface Entrada {
  //   id: number;
  // }

  // export interface Salida {
  //   id: number;
  //   titulo: string;
  //   duracion: string;
  //   categorias: CategoriasCurso[],
  //   nivel: string;
  //   instructor: string;
  //   foto: string;
  // }

  // interface CategoriasCurso {
  //   id: number;
  //   name: string;
  // }

export interface NivelesAll {

  nivel: string

}

export interface InstructorAll {

  nombre: string
  apellido: string

}

  export interface CursoTipoApplication extends Partial<Curso> {
    id: number
    titulo: string
    duracion: number
    foto: string
    nivel?: NivelesAll | number
    instructor?: InstructorAll | number
    categoria: []
}