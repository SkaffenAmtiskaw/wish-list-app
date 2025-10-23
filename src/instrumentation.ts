import mongoose from 'mongoose';

export const register = () => {
  mongoose.connect(process.env.DB_URL!);
};
