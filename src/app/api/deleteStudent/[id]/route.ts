import { NextRequest } from "next/server";
import { Connect } from "@/app/db/dbConfig";
import Student from "@/app/model/registerUser";

// Adjusted DELETE handler to use NextRequest
export async function DELETE(req: NextRequest): Promise<Response> {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // Extract the ID from the URL path

  try {
    await Connect();
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return new Response(
        JSON.stringify({ message: "Student not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Student deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting student:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
