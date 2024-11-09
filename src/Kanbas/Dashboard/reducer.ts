import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
};
const enrollSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollStudent: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: (state.enrollments.length + 1),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollStudent: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId);
    },
},
});
export const { enrollStudent, unenrollStudent } =
enrollSlice.actions;
export default enrollSlice.reducer;