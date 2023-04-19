import Joi  from 'joi' ;

const email = Joi.string();
const token = Joi.string();
const newPassword = Joi.string().min(6);



export const recoveryPassSchema = Joi.object({

  email: email.required(),

})

export const changePasswordSchema = Joi.object({

  token: token.required(),
  newPassword: newPassword.required(),
  code: token.required()

})
