import { body, param, ValidationChain } from "express-validator";

import { ValidatorMiddleware } from "../../presentation/middlewares/validator.handler";

export class RoleSchema {
  static create(): ValidationChain[] {
    return [
      body("name")
        .notEmpty()
        .withMessage("El nombre es requerido")
        .trim()
        .isString()
        .withMessage("El nombre ser una cadena de texto"),
      body("description")
        .trim()
        .isString()
        .withMessage("La descripción debe ser una cadena de texto"),
    ];
  }

  static update(): ValidationChain[] {
    return [
      param("id")
        .notEmpty()
        .withMessage("El id es requerido.")
        .isNumeric()
        .withMessage("El id debe ser un valor numerico."),
      body("name")
        .notEmpty()
        .withMessage("El nombre es requerido")
        .trim()
        .isString()
        .withMessage("El nombre ser una cadena de texto"),
      body("description")
        .trim()
        .isString()
        .withMessage("La descripción debe ser una cadena de texto"),
    ];
  }

  static getId(): ValidationChain[] {
    return [
      param("id")
        .notEmpty()
        .withMessage("El id es requerido.")
        .isNumeric()
        .withMessage("El id debe ser un valor numerico."),
    ];
  }
}

export const createRoleSchema = new ValidatorMiddleware(RoleSchema.create());
export const updateRoleSchema = new ValidatorMiddleware(RoleSchema.update());
export const getIdSchema = new ValidatorMiddleware(RoleSchema.getId());
