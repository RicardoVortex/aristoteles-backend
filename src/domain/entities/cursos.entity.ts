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
  