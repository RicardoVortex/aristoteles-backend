import { ListaDeseosEntityApplication } from "../../../domain/entities/lista_deseos.entity";
import { CursoRepository } from "../../../domain/repositories";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import { HttpRequest, HttpResponse } from "../../../infraestructure/interfaces/http-interface";
import { HttpHelper } from "../../../shared/helpers";

export class PostFavoritoController implements Controller {
    constructor(private readonly cursoRepository: CursoRepository) {}
    async  handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try{
            const { favorito = false, curso_id } = httpRequest.body;
            const fecha_cr = new Date(), fecha_at = new Date();
            const user_id = httpRequest.user.id;
            const cursos = await this.cursoRepository.createFavorito({ curso_id, user_id, favorito, fecha_cr, fecha_at });

                return HttpHelper.success<ListaDeseosEntityApplication>(cursos,"Cursos obtenidos correctamente");
            
        }catch(error){
            return HttpHelper.serverError(error);
        }
    }
}