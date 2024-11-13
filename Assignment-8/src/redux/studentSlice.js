// src/features/students/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';
import studentsData from '../student.json'; // Import JSON data

const studentSlice = createSlice({
  name: 'students',
  initialState: { list: studentsData }, // Use JSON data as initial state
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.list.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;