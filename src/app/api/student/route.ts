
import { NextResponse } from "next/server";
import { Connect } from "@/app/db/dbConfig";
import Student from "@/app/model/registerUser";

export async function GET() {
    await Connect(); // Connect to DB
  
    try {
      const students = await Student.find({});
      return NextResponse.json({ students }, { status: 200 });
    } catch (error) {
      console.error("Error fetching students:", error);
      return NextResponse.json({ message: "Failed to fetch students" }, { status: 500 });
    }
  }
  