import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDataType } from './dto/user.dto';
import { HashText, CreateId } from 'src/utils';
import { FormatedData } from './dto/data.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDataType>) {}

  async createUser(name: string, email: string, password: string) {
    const information: FormatedData = {
      _id: CreateId(),
      name: name,
      email: email,
      password: HashText(password),
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
