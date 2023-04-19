import { HttpResponse } from '../core/interfaces/http-interface';
import { ServerError } from './server-error';

import boom from '@hapi/boom';


export const success = <T>(data: T, message: string, success=true) : HttpResponse => ({
  statusCode: 200,
  body: data,
  message,
  success

})

export const serverError = (error: Error | unknown,  message= 'Algo salio mal', success=false) : HttpResponse => {



  if(boom.isBoom(error)){
    const {output} = error
    return {
      statusCode: output.statusCode,
      body: output.payload,
      message: 'Error de boom',
      success
    }
  } else {
    return  {
      statusCode: 500,
      body: error instanceof Error ? new ServerError(error.stack) : 'Error sin identificar',
      message,
      success
    }

  }



}
