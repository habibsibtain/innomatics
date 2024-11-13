// src/pages/ViewStudent.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ViewStudent = () => {
  const { id } = useParams();
  const students = useSelector((state) => state.students);
   // Convert id to a number for comparison
   const studentId = Number(id);
   const student = useSelector((state) => state.students.list.find((s) => s.id === studentId));

  if (!student) return <p>Student not found!</p>;

  return (
    <Container className="mt-4">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Class:</strong> {student.class}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Phone Number:</strong> {student.phone}</p>
    </Container>
  );
};

export default ViewStudent;