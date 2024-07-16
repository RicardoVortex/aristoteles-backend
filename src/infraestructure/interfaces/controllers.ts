import { HttpRequest, HttpResponse, HttpNext } from "./http-interface";

export interface Controller {
  handle(
    httpRequest: HttpRequest,
    httpNext: HttpNext["next"]
  ): Promise<HttpResponse>;
}
