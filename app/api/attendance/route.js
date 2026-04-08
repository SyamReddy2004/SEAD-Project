import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Attendance from "@/lib/models/Attendance";
import Student from "@/lib/models/Student";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");
    const date = searchParams.get("date");

    const query = {};
    if (studentId) query.student = studentId;
    if (date) query.date = new Date(date);

    const records = await Attendance.find(query).populate({
      path: "student",
      populate: { path: "user", select: "name" }
    });

    return NextResponse.json({ data: records }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch attendance" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const { studentId, status, teacherId } = await req.json();

    // Create today's attendance record (strip out time)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const record = await Attendance.findOneAndUpdate(
      { student: studentId, date: today },
      { status, recordedBy: teacherId },
      { new: true, upsert: true } // Upsert prevents duplicates, updates if exists
    );

    return NextResponse.json({ message: "Attendance logged successfully", data: record }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to log attendance" }, { status: 500 });
  }
}
