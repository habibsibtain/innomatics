// src/components/StudentForm.jsx
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const StudentForm = ({ onSubmit, initialData }) => {
  const [student, setStudent] = useState(initialData || {
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    if (initialData) {
      setStudent(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit prop with the updated student data
    onSubmit(student);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={student.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={student.email} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name="age" value={student.age} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formClass">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" name="class" value={student.class} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" value={student.address} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name="phone" value={student.phone} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default StudentForm;