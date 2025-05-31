import { Schema, SchemaTypes, model, models, Types } from 'mongoose';
import type { Model } from 'mongoose';

type UserInterface = {
  _id: string;
  name: string;
  lists: Types.ObjectId[],
  bookmarks: Types.ObjectId[],
}

const userSchema = new Schema<UserInterface>({
  _id: String,
  name: String,
  lists: [{
    type: SchemaTypes.ObjectId,
    ref: 'List',
    required: true,
  }],
  bookmarks: [{
    type: SchemaTypes.ObjectId,
    ref: 'List',
    required: true,
  }],
});

export const User: Model<UserInterface> = models.User || model<UserInterface>('User', userSchema);