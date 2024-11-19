import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/usermodel";
import bcryptjs from "bcryptjs";


export async function POST(request,response) {
  await dbConnect()
try {
    const body = await request.json()
    console.log(body,"body")
    
    const {username, email, password } = body
    if (!username || !email || !password) {
      return response.json({
        message: "All fields are required"
      }, {
        status: 400
      })
    }
    const userExists = await User.findOne({ email })
    if(userExists){
      return Response.json({
        message: "User with this email already exists, please try different email"
      }, {
        status: 400
      })
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
  
    const newUser = new User({
      username,
      email,
      password :hashedPassword
    }) 
    console.log(newUser._id);
  
    const savedUser = await newUser.save();
    
  
    return Response.json(
      {
        success: true,
        message: 'User registered successfully. Please verify your account.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error registering user:', error);
    return Response.json(
      {
        success: false,
        message: 'Error registering user',
      },
      { status: 500 }
    );
  }
}