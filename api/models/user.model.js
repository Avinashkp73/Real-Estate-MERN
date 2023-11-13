import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String, 
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
   avatar:{
      type: String,
      default: "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
