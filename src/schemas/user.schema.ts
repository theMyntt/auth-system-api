import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
  collection: "infos"
})
export class User {
  @Prop()
  _id: number;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  constructor(todo?: Partial<User>) {
    this._id = todo._id;
    this.name = todo.name;
    this.email = todo.email;
    this.password = todo.password;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);