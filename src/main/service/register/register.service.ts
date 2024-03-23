import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth';
import { HashText } from 'src/utils';
import CreateId from 'src/utils/createId/id.util';

interface Informations {
  _id: number;
  name: string;
  email: string;
  password: string;
}
@Injectable()
export class RegisterService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(name: string, email: string, password: string) {
    const hashPassword = HashText(password);
    const information: Informations = {
      _id: CreateId(),
      name: name,
      email: email,
      password: hashPassword,
    };

    try {
      const hasUser = await this.userModel.findOne({email: email}).exec();
      console.log(hasUser)

      if (hasUser) return 'Usuário ja cadastrado.';

      await new this.userModel(information).save();

      return 'Usuário cadastrado com sucesso';
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
