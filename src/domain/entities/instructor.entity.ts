// export class InstructorEntity{

//     constructor( 
//         public id: number,
//         public nombre: string,
//         public apellido: string 
//     ){}
    
    
//     static fromObject(object: {[key: string]: any}): InstructorEntity {
    
//     const {id, nombre, apellido} = object;
    
    
//     return new InstructorEntity(id, nombre, apellido);
        
//     }
    
        
//     }


export interface InstructorEntityApplication{

    id: number,
    nombre: string,
    apellido: string
  
  }
  