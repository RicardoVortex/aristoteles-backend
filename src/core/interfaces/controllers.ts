import { HttpRequest, HttpResponse, HttpNext } from './http-interface';
import { NextFunction } from 'express';

export interface Controller {
    handle(httpRequest: HttpRequest, httpNext: HttpNext['next']): Promise<HttpResponse>
}
