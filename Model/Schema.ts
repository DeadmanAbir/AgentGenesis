import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: String,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
