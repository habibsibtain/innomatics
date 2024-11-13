// src/pages/RegisterStudent.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/studentSlice';
import { useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

const RegisterStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (student) => {
    dispatch(addStudent({ ...student, id: Date.now().toString() }));
    navigate('/students');
  };

  return (
    <div className="container mt-4">
      <h3>Register New Student</h3>
      <StudentForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterStudent;