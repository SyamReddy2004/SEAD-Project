import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Student from "@/lib/models/Student";
import User from "@/lib/models/User";

export async function GET(req) {
  try {
    await dbConnect();
    // Population fetches the User properties (name, email) attached to this Student
    const students = await Student.find({}).populate("user", "name email role");
    return NextResponse.json({ data: students }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    
    // In a real app, you would verify the JWT role === 'admin' before proceeding
    
    const newUser = await User.create({
      email: data.email,
      password: data.password, // Remember to hash this using bcrypt in production
      role: "student",
      name: data.name,
      regNo: data.regNo,
    });

    const newStudent = await Student.create({
      user: newUser._id,
      regNo: data.regNo,
      grade: data.grade,
      parentEmail: data.parentEmail,
      busRoute: data.busRoute,
    });

    return NextResponse.json({ message: "Student registered", data: newStudent }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to register student" }, { status: 500 });
  }
}
