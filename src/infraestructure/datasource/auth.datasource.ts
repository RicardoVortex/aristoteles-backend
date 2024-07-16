import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { compareSync } from "bcrypt";

import { envs } from "../../config";

import { AuthRepository } from "../../domain/repositories";
import { ChangePasswordDto, SignTokenDto } from "../../domain/dtos";
import { CustomError } from "../../domain/errors/custom.error";
import { UserEntity } from "../../domain/entities";

import User from "../../data/sequelize/models/user.model";

export class AuthDataSource implements AuthRepository {
  verifyToken(token: string): SignTokenDto {
    try {
      return jwt.verify(token, envs.JWT_SECRET) as SignTokenDto;
    } catch (error) {
      throw CustomError.badRequest("Token invalido.");
    }
  }

  async validateCode(user: UserEntity, code: string): Promise<boolean> {
    return user.code === code;
  }

  compare(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }

  signToken({ id, role_id }: SignTokenDto): string {
    const token = jwt.sign({ id, role_id }, envs.JWT_SECRET, {
      expiresIn: "2h",
    });

    return token;
  }

  async signTokenRecovery(user_id: number, code: string): Promise<string> {
    const token = jwt.sign({ id: user_id }, envs.JWT_SECRET, {
      expiresIn: "5min",
    });

    await User.update(
      { code, recoveryToken: token },
      { where: { id: user_id } }
    );

    return token;
  }

  async changePassword({
    code,
    newPassword,
    token,
    user,
  }: ChangePasswordDto): Promise<void> {
    if (user.recoveryToken !== token) {
      throw CustomError.unauthorized("Acceso denegado!");
    }

    if (user.code !== code) {
      throw CustomError.unauthorized("El codigo no es correcto");
    }

    try {
      const hash = await bcrypt.hash(newPassword, 10);

      await User.update(
        { password: hash, recoveryToken: "", code: "" },
        { where: { id: user.id } }
      );
    } catch (error) {
      throw CustomError.unauthorized("Error al cambiar a contraseña");
    }
  }

  async refreshToken(tokenRefresh: string): Promise<string> {
    const payload = jwt.verify(tokenRefresh, envs.JWT_SECRET);

    console.log(payload);

    return "token";
  }
}
