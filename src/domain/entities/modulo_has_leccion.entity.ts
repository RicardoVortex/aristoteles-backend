// export class ModuloHasLeccionEntity{

//     constructor( 
//         public id: number,
//         public modulo_id: number,
//         public leccion_id: number,
//     ){}
    
    
//     static fromObject(object: {[key: string]: any}): ModuloHasLeccionEntity {
    
//     const {id, modulo_id, leccion_id} = object;
    
//         return new ModuloHasLeccionEntity(id, modulo_id, leccion_id);
        
//     }
    
        
//     }


    
export interface ModuloHasLeccionEntityApplication{

    id: number,
    modulo_id: number,
    leccion_id: number,
  
  }
  