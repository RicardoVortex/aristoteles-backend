import { CustomError } from "../../domain/errors/custom.error";

import { HttpResponse } from "../../infraestructure/interfaces/http-interface";

import { ServerError } from "./server-error";

export class HttpHelper {
  static serverError(
    error: Error | unknown,
    message: string = "Algo salio mal",
    success: boolean = false
  ) {
    if (error instanceof CustomError) {
      return {
        statusCode: error.statusCode,
        body: error.stack,
        message: error.message,
        success,
      };
    }

    return {
      statusCode: 500,
      body:
        error instanceof Error
          ? new ServerError(error.stack)
          : "Error sin identificar",
      message,
      success,
    };
  }

  static success<T>(
    data: T,
    message: string,
    success: boolean = true
  ): HttpResponse {
    return {
      statusCode: 200,
      body: data,
      message,
      success,
    };
  }
}
