
// import {Request, Response, NextFunction} from 'express'
// import respuesta from '../../helpers/respuesta'
// import {auth} from '../../core/interactors'

// const refreshToken = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const payload: any = req.user
//     const token = auth.generateToken({sub: payload?.sub, role: payload?.role })
//     return respuesta(res, true, 200, 'token actualizado', token )
//   } catch (error) {
//     next(error)
//   }
// }

// export default refreshToken
