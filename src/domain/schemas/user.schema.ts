import { body, param, ValidationChain } from "express-validator";

import { ValidatorMiddleware } from "../../presentation/middlewares/validator.handler";

export class UserSchema {
  static register(): ValidationChain[] {
    return [
      body("names")
        .notEmpty()
        .withMessage("Los nombres son requeridos")
        .trim()
        .isString()
        .withMessage("Los nombres deben ser una cadena de texto"),
      body("surnames")
        .notEmpty()
        .withMessage("Los apellidos son requeridos")
        .trim()
        .isString()
        .withMessage("Los apellidos deben ser una cadena de texto"),
      body("email")
        .notEmpty()
        .withMessage("El correo es requerido!")
        .trim()
        .isEmail()
        .withMessage("Ingrese un correo valido!")
        .toLowerCase(),
      body("password")
        .notEmpty()
        .withMessage("La contraseña es requerida!")
        .trim()
        .isLength({ min: 8 })
        .withMessage(
          "La contraseña debe tener como mínimo 8 caracteres de longitud!"
        ),
      body("date_birth")
        .isDate()
        .withMessage("La fecha de cumpleaños no es valida!"),
    ];
  }

  static update(): ValidationChain[] {
    return [
      param("id")
        .notEmpty()
        .withMessage("El id es requerido.")
        .isNumeric()
        .withMessage("El id debe ser un valor numerico."),
      body("names")
        .notEmpty()
        .withMessage("Los nombres son requeridos")
        .trim()
        .isString()
        .withMessage("Los nombres deben ser una cadena de texto"),
      body("surnames")
        .notEmpty()
        .withMessage("Los apellidos son requeridos")
        .trim()
        .isString()
        .withMessage("Los apellidos deben ser una cadena de texto"),
      body("date_birth")
        .isDate()
        .withMessage("La fecha de cumpleaños no es valida!"),
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

export const registerUserSchema = new ValidatorMiddleware(
  UserSchema.register()
);
export const updateUserSchema = new ValidatorMiddleware(UserSchema.update());
export const getIdSchema = new ValidatorMiddleware(UserSchema.getId());
