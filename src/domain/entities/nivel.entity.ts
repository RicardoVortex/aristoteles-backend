export class NivelEntity{

    constructor( public id: number, public nivel: string ){}
    
    
    static fromObject(object: {[key: string]: any}): NivelEntity {
    
    const {id, nivel} = object;
    
    
    return new NivelEntity(id, nivel);
        
    }
    
        
    }