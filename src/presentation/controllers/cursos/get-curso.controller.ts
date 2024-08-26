import { CursosEntityApplication } from "../../../domain/entities/cursos.entity";
import { CursoRepository } from "../../../domain/repositories";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import { HttpRequest, HttpResponse } from "../../../infraestructure/interfaces/http-interface";
import { HttpHelper } from "../../../shared/helpers";



export class GetCursoController implements Controller{
    constructor(private readonly cursoRepository: CursoRepository) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try{
            const { id } = httpRequest.params;
            const curso = await this.cursoRepository.getOne(id);
            return HttpHelper.success<CursosEntityApplication>(curso,"Cursos obtenidos correctamente");
        }catch(error){
            return HttpHelper.serverError(error);
        }
    }
}