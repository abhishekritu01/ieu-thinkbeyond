import { Connect } from "@/app/db/dbConfig";
import Student from "@/app/model/registerUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await Connect(); // Ensure the DB is connected before proceeding

  const body = await request.json(); // Parse the JSON body
  const { fullName, age, grade, email, contactNumber } = body;

  // Validate input fields
  if (!fullName || !age || !grade || !email || !contactNumber) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  // Check if the student is already registered by email
  const existing = await Student.findOne({ email });
  if (existing) {
    return NextResponse.json({ message: "Email already registered" }, { status: 409 });
  }

  try {
    const student = new Student({
      fullName,
      age,
      grade,
      email,
      contactNumber,
    });

    // Save the student document in the database
    await student.save();
    return NextResponse.json({ message: "Student registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "Server error while registering student" }, { status: 500 });
  }
}
