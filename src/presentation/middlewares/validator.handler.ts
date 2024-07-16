import { NextFunction, Response, Request } from "express";
import { validationResult } from "express-validator";

export class ValidatorMiddleware {
  constructor(public validations: any[]) {}

  validate = async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(
      this.validations.map((validation) => validation.run(req))
    );

    const errors = validationResult(req);

    if (errors.isEmpty()) return next();

    res.status(400).json({
      statusCode: 400,
      errors: errors.array(),
    });
  };
}
