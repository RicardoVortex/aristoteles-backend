import { Response } from "express";

const respuesta = (
  res: Response,
  exitoso: boolean,
  status: number,
  mensaje: string,
  data?: any
  ) => {

    return res.status(status).json({
      exitoso,
      mensaje,
      data
    })
  }

  export default respuesta
