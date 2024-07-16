import { Response, NextFunction } from "express";

import { Controller } from "../interfaces/controllers";
import { CustomRequest, HttpRequest } from "../interfaces/http-interface";

export const AdapterRoute = (controller: Controller) => {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
        user: req.user,
      };

      const httpResponse = await controller.handle(httpRequest, next);

      return res.status(httpResponse.statusCode).json({
        success: httpResponse.success,
        message: httpResponse.message,
        body: httpResponse.body,
      });
    } catch (error) {
      next(error);
    }
  };
};
