import nodemailer from "nodemailer";
import pug from "pug";
import path from "path";
import { htmlToText } from "html-to-text";

import { EmailRepository } from "../../domain/repositories/email.repository";

import { UserEntity } from "../../domain/entities/user.entity";
import { SendEmailOptionsDto, SendRecoveryDto } from "../../domain/dtos";

import { envs } from "../../config";

export class EmailDataSource implements EmailRepository {
  async notifyRecoveryPassword(data: SendRecoveryDto): Promise<void> {
    await this.sendMail({
      data,
      subject: "Recuperación de Contraseña",
      template: "recoveryPassword",
      to: data.to,
    });
  }

  async notifyUser(_user: UserEntity): Promise<void> {
    // const mailOptions: SendMailOptions = {
    //   from: "Nombre del proyecto/empresa",
    //   to: user.email,
    //   subject: "Asunto",
    //   text: `El usuario ${user.name} ${user.lastName} fue registrado con éxito`,
    // };
    // await this.sendMail(mailOptions);
  }

  async sendMail({
    data,
    template,
    to,
    subject,
  }: SendEmailOptionsDto): Promise<void> {
    const html = pug.renderFile(
      path.join(`${__dirname}/../../presentation/views/email/${template}.pug`),
      data
    );

    if (envs.NODE_ENV === "production") {
      return console.log("Correo produccion");
    }

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: envs.EMAILTRAP_USER,
    //     pass: envs.EMAILTRAP_PASS,
    //   },
    // });



    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: envs.EMAILTRAP_USER,
        pass: envs.EMAILTRAP_PASS,
      },
    });



    // await transporter.sendMail({
    //   from: "manueldazafon@gmail.com",
    //   to: to,
    //   subject,
    //   html,
    //   text: htmlToText(html),
    // });



    await transporter.sendMail({
      from: envs.EMAILTRAP_USER,
      to: to,
      subject,
      html,
      text: htmlToText(html),
    });



  }
}
