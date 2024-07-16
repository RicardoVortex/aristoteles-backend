import { check, ValidationChain } from "express-validator";

import { ValidatorMiddleware } from "../../presentation/middlewares/validator.handler";

export class AuthSchema {
  static recoveryPass(): ValidationChain[] {
    return [
      check("email")
        .notEmpty()
        .trim()
        .withMessage("El correo es requerido!")
        .isEmail()
        .toLowerCase()
        .withMessage("Ingrese un correo valido!"),
    ];
  }

  static login(): ValidationChain[] {
    return [
      check("email")
        .notEmpty()
        .trim()
        .withMessage("El correo es requerido!")
        .isEmail()
        .toLowerCase()
        .withMessage("Ingrese un correo valido!"),
      check("password")
        .notEmpty()
        .trim()
        .withMessage("La contraseña es requerida!")
        .isLength({ min: 8 })
        .withMessage(
          "La contraseña debe tener como minimo 8 caracteres de longitud!"
        ),
    ];
  }

  static changePassword(): ValidationChain[] {
    return [
      check("token")
        .notEmpty()
        .trim()
        .withMessage("El token es requerido!")
        .isString()
        .withMessage("El token debe ser una cadena de texto"),
      check("newPassword")
        .notEmpty()
        .trim()
        .withMessage("La contraseña es requerida!")
        .isLength({ min: 8 })
        .withMessage(
          "La contraseña debe tener como minimo 8 caracteres de longitud!"
        ),
    ];
  }

  static validateCode(): ValidationChain[] {
    return [
      check("code")
        .notEmpty()
        .withMessage("El código es requerido.")
        .trim()
        .isString()
        .withMessage("El código debe ser una cadegaa de texto")
        .isLength({ min: 6, max: 6 })
        .withMessage(
          "El código debe tener como maximo 6 caracteres de longitud"
        ),
      check("token")
        .notEmpty()
        .trim()
        .withMessage("El token es requerido!")
        .isString()
        .withMessage("El token debe ser una cadena de texto"),
    ];
  }
}

export const recoveryPassSchema = new ValidatorMiddleware(
  AuthSchema.recoveryPass()
);
export const changePasswordSchema = new ValidatorMiddleware(
  AuthSchema.changePassword()
);
export const loginSchema = new ValidatorMiddleware(AuthSchema.login());
export const validateCodeSchema = new ValidatorMiddleware(
  AuthSchema.validateCode()
);
