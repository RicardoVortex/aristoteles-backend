export class ResenaEntity{

    constructor( 
        public id: number,
        public calificacion_id: number,
        public resena: string,
        public user_id: string
    ){}
    
    
    static fromObject(object: {[key: string]: any}): ResenaEntity {
    
    const {id, calificacion_id, resena, user_id} = object;
    
    
    return new ResenaEntity(id, calificacion_id, resena, user_id);
        
    }
    
        
    }