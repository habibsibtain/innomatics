// src/redux/studentSlice.js

import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
   name: 'students',
   initialState: { data: [] },
   reducers: {
       addStudent: (state, action) => {
           state.data.push(action.payload);
       },
       deleteStudent: (state, action) => {
           state.data = state.data.filter((student) => student.id !== action.payload);
       },
       updateStudent: (state, action) => {
           const index = state.data.findIndex((student) => student.id === action.payload.id);
           if (index !== -1) {
               state.data[index] = action.payload;
           }
       },
   },
});

export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;