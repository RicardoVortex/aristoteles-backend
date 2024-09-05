export interface GetCursoDto {

    // readonly titulo: string
    // readonly fecha_inicio: Date
    // readonly resena_id: number
    // readonly foto: string
    readonly titulo?: string
    readonly categoria?: string
    readonly nivel?: string
    readonly instructor?: string

}



export interface CreateCursoDto {

    readonly titulo: string
    readonly descripcion: string
    readonly objetivos: string
    readonly duracion: number
    readonly nivel_id: number
    readonly instructor_id: number
    readonly fecha_inicio: Date
    readonly resena_id: number
    readonly foto: string

}

export interface UpdateCursoDto {

    readonly titulo?: string
    readonly descripcion?: string
    readonly objetivos?: string
    readonly duracion?: number
    readonly nivel_id?: number
    readonly instructor_id?: number
    readonly fecha_inicio?: Date
    readonly resena_id?: number
    readonly foto?: string

}
