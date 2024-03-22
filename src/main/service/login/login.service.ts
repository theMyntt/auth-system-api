import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { HashText } from 'src/utils';

@Injectable()
export class LoginService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) { }

  async getLogin(email: string, password: string) {
    const hashPassword: string = HashText(password);
    
    try {
      const result = await this.userModel.findOne({email: email, password: hashPassword}).exec();

      if (result) {
        return result;
      }

      return "Não cadastrado";
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
