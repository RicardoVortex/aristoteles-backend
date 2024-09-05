import { plantillasGetsCursos } from "../../../domain/entities/cursos.entity";
import { CursoRepository } from "../../../domain/repositories";

import { Controller } from "../../../infraestructure/interfaces/controllers";
import { HttpRequest, HttpResponse } from "../../../infraestructure/interfaces/http-interface";
import { HttpHelper } from "../../../shared/helpers";

export class GetCursosController implements Controller {
    constructor(private readonly cursoRepository: CursoRepository) {}
    async  handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try{
            const { titulo="", categoria="", instructor="", nivel="" } = httpRequest.query;
            const cursos = await this.cursoRepository.getAll({titulo, categoria, instructor, nivel});
            return HttpHelper.success<plantillasGetsCursos[]>(cursos,"Cursos obtenidos correctamente");
        }catch(error){
            return HttpHelper.serverError(error);
        }
    }
}