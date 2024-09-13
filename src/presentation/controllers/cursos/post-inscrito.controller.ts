import { InscritoEntityApplication } from "../../../domain/entities/inscrito.entity";
import { CursoRepository } from "../../../domain/repositories";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import { HttpRequest, HttpResponse } from "../../../infraestructure/interfaces/http-interface";
import { HttpHelper } from "../../../shared/helpers";

export class PostInscritoController implements Controller {
    constructor(private readonly cursoRepository: CursoRepository) {}
    async  handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try{
            const { inscrito = false, curso_id } = httpRequest.body;
            const fecha_cr = new Date(), fecha_at = new Date();
            const user_id: number | undefined = httpRequest.user?.id;
            const cursos = await this.cursoRepository.createInscrito({ curso_id, user_id, inscrito, fecha_cr, fecha_at });

                return HttpHelper.success<InscritoEntityApplication | undefined>(cursos,"Inscripcion realizada correctamente");
            
        }catch(error){
            return HttpHelper.serverError(error);
        }
    }
}