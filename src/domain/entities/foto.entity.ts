// export class FotoEntity{

//     constructor( public id: number, public nivel: string ){}
    
    
//     static fromObject(object: {[key: string]: any}): NivelEntity {
    
//     const {id, nivel} = object;
    
    
//     return new NivelEntity(id, nivel);
        
//     }
    
        
//     }

export interface FotoEntityApplication{

    id: number
    url: string
    public_id: string
  
  }
  