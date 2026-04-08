import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import LMSNote from "@/lib/models/LMSNote";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const grade = searchParams.get("gradeLevel");

    const query = grade ? { gradeLevel: grade } : {};
    const notes = await LMSNote.find(query).populate("uploadedBy", "name");

    return NextResponse.json({ data: notes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to load LMS Notes" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const newNote = await LMSNote.create(data);
    return NextResponse.json({ message: "Note uploaded successfully", data: newNote }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to upload Note" }, { status: 500 });
  }
}
