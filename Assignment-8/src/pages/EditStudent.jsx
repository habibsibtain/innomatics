import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { updateStudent } from '../redux/studentSlice';

const EditStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector((state) => state.students.list);
  const student = students.find((student) => student.id === Number(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        email: student.email,
        age: student.age,
        class: student.class,
        address: student.address || '',
        phone: student.phone || ''
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent({ id, ...formData }));
    navigate('/students');
  };

  if (!student) return <p>Student not found!</p>;

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <Card.Title>Edit Student</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/* Repeat for email, age, class, address, and phone fields */}
            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditStudent;
