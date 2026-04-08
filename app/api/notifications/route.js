import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Notification from "@/lib/models/Notification";

export async function GET(req) {
  try {
    await dbConnect();
    // In production, user token determines which notifications to fetch
    const notifications = await Notification.find({}).sort({ createdAt: -1 }).limit(20);
    return NextResponse.json({ data: notifications }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to load notifications stream" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const payload = await req.json();
    const broadcast = await Notification.create(payload);
    return NextResponse.json({ message: "Alert broadcast successfully deployed", data: broadcast }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to trigger broadcast framework" }, { status: 500 });
  }
}
