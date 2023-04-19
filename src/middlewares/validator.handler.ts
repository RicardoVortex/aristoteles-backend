import boom from '@hapi/boom'
import { NextFunction, Response, Request } from 'express';
import {ObjectSchema} from 'joi';

type Properties = 'body' | 'params' | 'query'

const validatorHandler = (schema: ObjectSchema, property: Properties ) =>
  (req: Request, res: Response, next: NextFunction) => {

  const data = req[property]
  const {error} = schema.validate(data, {abortEarly: false})
  if(error){
    next(boom.badRequest(`Error en la petición ${error}`))
  }
  next()
}


export default validatorHandler
