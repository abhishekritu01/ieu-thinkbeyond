"use client";

import React, { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  useEffect(() => {
    fetch("/api/student")
      .then((res) => res.json())
      .then((data) => {
        const studentList = data.students || [];
        setStudents(studentList);
        setFilteredStudents(studentList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch students:", err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = students.filter((student: { fullName: string; email: string; contactNumber: string }) =>
      `${student.fullName} ${student.email} ${student.contactNumber}`
        .toLowerCase()
        .includes(query)
    );

    setFilteredStudents(filtered);
    setCurrentPage(1);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/deleteStudent/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updatedList = students.filter((student: { _id: string }) => student._id !== id);
        setStudents(updatedList);

        const updatedFiltered = filteredStudents.filter((student: { _id: string }) => student._id !== id);
        setFilteredStudents(updatedFiltered);
      } else {
        console.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  if (loading) return <p className="p-4 text-white">Loading student data...</p>;

  return (
    <div className="p-4 text-white">
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email, or contact..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-600"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-700 rounded-md bg-gray-900 text-white">
          <thead>
            <tr className="bg-gray-800">
              <th className="py-2 px-3 border border-gray-700">Full Name</th>
              <th className="py-2 px-3 border border-gray-700">Age</th>
              <th className="py-2 px-3 border border-gray-700">Grade</th>
              <th className="py-2 px-3 border border-gray-700">Email</th>
              <th className="py-2 px-3 border border-gray-700">Contact</th>
              <th className="py-2 px-3 border border-gray-700 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student: { _id: string; fullName: string; age: number; grade: string; email: string; contactNumber: string }) => (
              <tr key={student._id} className="hover:bg-gray-800">
                <td className="py-2 px-3 border border-gray-700">{student.fullName}</td>
                <td className="py-2 px-3 border border-gray-700">{student.age}</td>
                <td className="py-2 px-3 border border-gray-700">{student.grade}</td>
                <td className="py-2 px-3 border border-gray-700">{student.email}</td>
                <td className="py-2 px-3 border border-gray-700">{student.contactNumber}</td>
                <td className="py-2 px-3 border border-gray-700 text-center">
                  <button className="text-blue-400 hover:text-blue-600 mx-1">
                    <FaEye />
                  </button>
                  <button
                    className="text-red-400 hover:text-red-600 mx-1"
                    onClick={() => handleDelete(student._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {currentStudents.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-400">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
