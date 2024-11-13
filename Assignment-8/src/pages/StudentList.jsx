import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button, Pagination, Container, Form, Card } from 'react-bootstrap';
import { deleteStudent } from '../redux/studentSlice';

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.list);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const studentsPerPage = 5;
  const totalPages = Math.ceil(students.length / studentsPerPage);

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <Card.Title>Student List</Card.Title>
          <Form.Group controlId="search" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage).map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email || 'N/A'}</td>
                  <td>{student.class || 'N/A'}</td>
                  <td>
                    <Link to={`/students/${student.id}`} className="btn btn-info btn-sm">View</Link>{' '}
                    <Link to={`/edit/${student.id}`} className="btn btn-warning btn-sm">Edit</Link>{' '}
                    <Button variant="danger" size="sm" onClick={() => handleDelete(student.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination className="mt-3">
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StudentList;
