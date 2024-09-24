import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Link } from "react-router-dom";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h4>Elizabeth Jones <br /> Class: Tuesdays 6pm-9:20pm <br />
      <Link to="https://github.com/joneslizzie/kanbas-react-web-app">Git Hub Repository</Link>
      </h4>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
);}
