import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
  };
  export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  };
  export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
  };
  export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
  };
  export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/api/users/:userId/courses`);
    return data;
  };
  export const findAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/api/users/`);
    return data;
  };

  export const enrollInCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${courseId}/enrollment`);
    return data;
  };
  
  export const unenrollFromCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/unenrollment`);
    return data;
  };