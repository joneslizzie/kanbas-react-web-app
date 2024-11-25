import * as enrollmentsDao from "./dao.js";
export default function ModuleRoutes(app) {
 app.delete("/api/enrollments", async (req, res) => {
   const { userId, courseId } = req.params;
   const status = await enrollmentsDao.enrollUserInCourse(userId, courseId);
   res.send(status);
 });
}