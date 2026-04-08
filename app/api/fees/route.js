import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Fee from "@/lib/models/Fee";
import crypto from "crypto";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");

    const query = studentId ? { student: studentId } : {};
    const fees = await Fee.find(query).populate({
      path: "student",
      populate: { path: "user", select: "name regNo" }
    });

    return NextResponse.json({ data: fees }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch fees" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    // Mock Payment Processor Endpoint
    await dbConnect();
    const { feeId, paymentAmount, paymentMethod } = await req.json();

    const fee = await Fee.findById(feeId);
    if (!fee) return NextResponse.json({ error: "Fee record not found" }, { status: 404 });

    const newPaidAmount = fee.amountPaid + paymentAmount;
    let newStatus = "Partial";
    
    if (newPaidAmount >= fee.amountDue) {
      newStatus = "Paid";
    }

    // Generate Mock Receipt Number
    const receiptString = "REC-" + crypto.randomBytes(4).toString("hex").toUpperCase();

    fee.amountPaid = newPaidAmount;
    fee.status = newStatus;
    fee.paymentMethod = paymentMethod;
    fee.receiptNumber = receiptString;
    
    await fee.save();

    return NextResponse.json({ 
      message: "Payment processed via Mock Gateway", 
      receipt: receiptString,
      data: fee 
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Payment failed" }, { status: 500 });
  }
}
