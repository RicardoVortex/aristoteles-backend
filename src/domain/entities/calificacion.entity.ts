export class CalificacionEntity{

    constructor( public id: number, public calificacion: string ){}
    
    
    static fromObject(object: {[key: string]: any}): CalificacionEntity {
    
    const {id, calificacion} = object;
    
    
    return new CalificacionEntity(id, calificacion);
        
    }
    
        
    }