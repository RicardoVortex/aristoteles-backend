// export class CategoriaHasCursosEntity{

//     constructor( 
//         public id: number,
//         public curso_id: number,
//         public categoria_id: number,
//     ){}
    
    
//     static fromObject(object: {[key: string]: any}): CategoriaHasCursosEntity {
    
//     const {id, curso_id, categoria_id} = object;
    
//         return new CategoriaHasCursosEntity(id, curso_id, categoria_id);
        
//     }
    
        
//     }

    
export interface CategoriaHasCursosEntityApplication{

    id: number,
    curso_id: number,
    categoria_id: number,
  
  }
  