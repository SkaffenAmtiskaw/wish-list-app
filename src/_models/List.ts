import { Schema, model, models, Types } from 'mongoose';
import type { Model } from 'mongoose';

type Item = {
  name: string;
  url?: string;
  img?: string;
};

type Group = {
  name: string;
  items: Types.DocumentArray<Item>;
};

type ListInterface = {
  name: string;
  img?: string;
  groups: Types.DocumentArray<Group>;
};

const itemSchema = new Schema<Item>({
  name: String,
  url: String,
  img: String,
});

const groupSchema = new Schema<Group>({
  name: String,
  items: [itemSchema],
});

const listSchema = new Schema<ListInterface>({
  name: {
    type: String,
    required: true,
  },
  img: String,
  groups: [groupSchema],
});

export const List: Model<ListInterface> =
  models.List || model<ListInterface>('List', listSchema);
