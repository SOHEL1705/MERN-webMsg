import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/usermodel";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request, response) {
  await dbConnect()
  try {

    const body = await request.json()
    const { email, password } = body
    if (!email || !password) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400
        }
      )
    }

    const user = await User.findOne({ email })
    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User with this email does not exist",
        },
        {
          status: 400
        }
      )
    }

    const isMatchPassword = await bcryptjs.compare(password, user.password)
    if (!isMatchPassword) {
      return Response.json(
        {
          success: false,
          message: "Incorrect Password",
        },
        {
          status: 400
        }
      )
    }
    const tokenPayload = {
      _id: user._id,
      email: user.email,
      username: user.username
    }
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRE, })
    console.log(token)

   const response = NextResponse.json({
      success: true,
      message: "User logged in successfully",
      token
    })
    response.cookies.set("token", token, {
      httpOnly: true, 
      //* Makes the cookie inaccessible to client-side JavaScript,  increasing security
      maxAge: 60 * 60 * 24, //* Sets the maximum age of the cookie in seconds (1 day)
    });
    return response
  } catch (error) {
    return Response.json({
      success: false,
      message: "User logged in failed",
    })
  }
}