import React, { useState } from "react";
import './App.css'
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";
import CourseDrop from "./component/CourseDrop";

// ===== Type สำหรับ Course =====
interface Course {
  code: string;
  name: string;
  credit: number;
  grade?: string; // optional
}

export default function App(): JSX.Element {
  // state สำหรับ Course System
  const [courses, setCourses] = useState<Course[]>([]);
  const [dropped, setDropped] = useState<Course[]>([]);

  const addCourse = (course: Course): void => {
    setCourses([...courses, course]);
  };

  const dropCourse = (courseCode: string): void => {
    const course = courses.find((c) => c.code === courseCode);
    if (!course) return;
    setCourses(courses.filter((c) => c.code !== courseCode));
    setDropped([...dropped, course]);
  };

  const calcGPA = (): number => {
    if (courses.length === 0) return 0;
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((c) => {
      if (c.grade) {
        const point = gradeToPoint(c.grade);
        totalPoints += point * c.credit;
        totalCredits += c.credit;
      }
    });

    return totalCredits > 0 ? parseFloat((totalPoints / totalCredits).toFixed(2)) : 0;
  };

  const gradeToPoint = (grade: string): number => {
    switch (grade) {
      case "A": return 4;
      case "B+": return 3.5;
      case "B": return 3;
      case "C+": return 2.5;
      case "C": return 2;
      case "D+": return 1.5;
      case "D": return 1;
      case "F": return 0;
      default: return 0;
    }
  };

  return (
    <div className="card">
      <h1 style={{ color: "#646cff" }}>ระบบถอนรายวิชา</h1>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "flex-start", marginTop: "2rem" }}>
        <div style={{ flex: 1, minWidth: "300px", background: "#f6f8fa", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px #eee" }}>
          <CourseForm onAdd={addCourse} />
        </div>
        <div style={{ flex: 1, minWidth: "300px", background: "#fff", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px #eee" }}>
          <CourseList courses={courses} onDrop={dropCourse} />
        </div>
        <div style={{ flex: 1, minWidth: "300px", background: "#fff", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px #eee" }}>
          <CourseDrop dropped={dropped} />
        </div>
      </div>
      <h2 style={{ marginTop: "2rem", color: "#61dafb" }}>GPA รวม: {calcGPA()}</h2>
    </div>
  );
}
