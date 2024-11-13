import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center">
      <Card className="text-center p-4 shadow-sm" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <Card.Title as="h2">Welcome to the Student Management Portal</Card.Title>
          <Card.Text>Manage students efficiently and view details with ease.</Card.Text>
          <Button as={Link} to="/register" variant="primary" className="m-2">
            Register New Student
          </Button>
          <Button as={Link} to="/students" variant="secondary" className="m-2">
            View Student List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
