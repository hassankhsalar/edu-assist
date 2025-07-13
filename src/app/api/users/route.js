
import { connectDB } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const db = await connectDB();
    const result = await db.collection("users").insertOne(body);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("Error inserting user:", error);
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}
