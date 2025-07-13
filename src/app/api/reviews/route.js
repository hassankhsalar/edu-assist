
import { connectDB } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    const reviews = await db.collection("reviews").find().toArray();
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Failed to fetch reviews", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
