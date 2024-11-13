// src/pages/StudentDetails.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const StudentDetails = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const students = useSelector((state) => state.students.list); // Ensure you are accessing the correct part of the state

  // Find the student based on the ID
  const student = students.find((student) => student.id === Number(id));

  // Handle case where student is not found
  if (!student) return <p>Student not found!</p>;

  return (
    <Container>
      <h2>Student Details</h2>
      <Card>
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {student.email}<br />
            <strong>Age:</strong> {student.age}<br />
            <strong>Class:</strong> {student.class}<br />
            <strong>Address:</strong> {student.address || 'N/A'}<br />
            <strong>Phone Number:</strong> {student.phone || 'N/A'}
          </Card.Text>
          <Link to="/students" className="btn btn-primary">Back to List</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StudentDetails;