import {Schema,models,model} from "mongoose";

const userSchema = new Schema({
  
  username: {
    type: String,
    required: [true, "Please Provide a Username "],
  },
  email: {
    type: String,
    required: [true, "Please Provide a Email "],
  },
  password: {
    type: String,
    required: [true, "Please Provide a Password "],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User =  models.User || model( "User", userSchema);
export default User