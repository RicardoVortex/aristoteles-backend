export class ListaDeseosEntity{

    constructor( 
        public id: number,
        public curso_id: number,
        public user_id: number,
        public favorito: boolean,
        public fecha_cr: Date,
        public fecha_at: Date
    ){}
    
    
    static fromObject(object: {[key: string]: any}): ListaDeseosEntity {
    
    const {id, curso_id, user_id, favorito, fecha_cr, fecha_at} = object;
    
        return new ListaDeseosEntity(id, curso_id, user_id, favorito, fecha_cr, fecha_at);
        
    }
    
        
    }