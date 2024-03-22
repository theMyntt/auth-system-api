import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth';
import { HashText } from 'src/utils';

interface Informations {
  name: string,
  email: string,
  password: string
}
@Injectable()
export class RegisterService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  async createUser(name: string, email: string, password: string) {
    const hashPassword = HashText(password);
    const information: Informations = {
      name: name,
      email: email,
      password: hashPassword
    }

    try {
      await new this.userModel(information).save();

      return "Usuário cadastrado com sucesso";
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
