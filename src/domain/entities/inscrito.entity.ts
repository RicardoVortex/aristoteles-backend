// export class InscritoEntity{

//     constructor( 
//         public id: number,
//         public curso_id: number,
//         public user_id: number,
//         public inscrito: boolean
//     ){}
    
    
//     static fromObject(object: {[key: string]: any}): InscritoEntity {
    
//     const {id, curso_id, user_id, inscrito} = object;
    
//         return new InscritoEntity(id, curso_id, user_id, inscrito);
        
//     }
    
        
//     }


    
    
export interface InscritoEntityApplication{

    id: number | undefined,
    curso_id: number,
    user_id: number,
    inscrito: boolean,
    fecha_cr: Date,
    fecha_at: Date
  
  }
  