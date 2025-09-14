import React from "react";
import DropButton from "./DropButton";

// ประกาศ type ไว้ในไฟล์นี้เลย
interface Course {
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade?: string;
}

interface Props {
  courses: Course[];
  onDrop: (code: string) => void;
}

export default function CourseList({ courses, onDrop }: Props): JSX.Element {
  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.code}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต) - เกรด: {c.grade || "-"}
            <DropButton onClick={() => onDrop(c.code)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
