// export class ModuloHasCursosEntity{

//     constructor( 
//         public id: number,
//         public curso_id: number,
//         public modulo_id: number,
//     ){}
    
    
//     static fromObject(object: {[key: string]: any}): ModuloHasCursosEntity {
    
//     const {id, curso_id, modulo_id} = object;
    
//         return new ModuloHasCursosEntity(id, curso_id, modulo_id);
        
//     }
    
        
//     }

    
    export interface ModuloHasCursosEntityApplication{

        id: number,
        curso_id: number,
        modulo_id: number,
      
      }
      