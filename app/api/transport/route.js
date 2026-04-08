import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import TransportRoute from "@/lib/models/TransportRoute";

export async function GET(req) {
  try {
    await dbConnect();
    const routes = await TransportRoute.find({});
    return NextResponse.json({ data: routes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch active transport routes" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const routePayload = await req.json();
    const newRoute = await TransportRoute.create(routePayload);
    return NextResponse.json({ message: "Transport Route provisioned securely.", data: newRoute }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Configuration failed" }, { status: 500 });
  }
}
