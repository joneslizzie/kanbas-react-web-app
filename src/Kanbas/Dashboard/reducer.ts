import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};
const enrollSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
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
export const { enrollStudent, unenrollStudent, setEnrollments } =
enrollSlice.actions;
export default enrollSlice.reducer;