export class LeccionEntity{

    constructor( public id: number, public leccion: string ){}
    
    
    static fromObject(object: {[key: string]: any}): LeccionEntity {
    
    const {id, leccion} = object;
    
    
    return new LeccionEntity(id, leccion);
        
    }
    
        
    }