import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    avatar: { type: String, required: true, default: "https://res.cloudinary.com/masterdevs/image/upload/v1640359719/codeaddon/codeaddon-user_bclsui.jpg" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    root: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
