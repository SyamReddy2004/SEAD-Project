import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 2. Validate password (Assuming bcrypt was used during registration)
    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password === user.password; // For mock demonstration without actual DB seeder
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 3. Create JWT Token payload
    const payload = {
      id: user._id,
      role: user.role,
      name: user.name,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || "SUPER_SECRET_KEY", { expiresIn: "1d" });

    // 4. Return token and role
    return NextResponse.json({ token, role: user.role, name: user.name });

  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
