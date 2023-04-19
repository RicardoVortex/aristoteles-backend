import Joi  from 'joi' ;


const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const dateBirth = Joi.date();
const email = Joi.string().email();
const password = Joi.string().min(8);
const roleId = Joi.number().integer();
const status = Joi.boolean()

export const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  dateBirth,
  email: email.required(),
  password: password.required(),
  roleId: roleId.required(),
})

export const updateUserSchema = Joi.object({
  name,
  lastName,
  dateBirth,
  email,
  roleId,
})
export const changeStatusUserSchema = Joi.object({
  status: status.required()

})
export const getUserSchema = Joi.object({
  id: id.required(),
})


export const updatePasswordSchema = Joi.object({
  oldPassword: password.required(),
  newPassword: password.required(),
})

