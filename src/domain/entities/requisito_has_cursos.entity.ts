// export class RequisitoHasCursosEntity{

//     constructor( 
//         public id: number,
//         public curso_id: number,
//         public requisito_id: number,
//     ){}
    
    
//     static fromObject(object: {[key: string]: any}): RequisitoHasCursosEntity {
    
//     const {id, curso_id, requisito_id} = object;
    
//         return new RequisitoHasCursosEntity(id, curso_id, requisito_id);
        
//     }
    
        
//     }

    
export interface RequisitoHasCursosEntityApplication{

    id: number,
    curso_id: number,
    requisito_id: number,
  
  }
  