import React from "react";

// ประกาศ type ไว้ในไฟล์นี้ด้วย
interface Course {
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade?: string;
}

interface Props {
  dropped: Course[];
}

export default function CourseDrop({ dropped }: Props): JSX.Element {
  return (
    <div>
      <h2>รายวิชาที่ถอน</h2>
      <ul>
        {dropped.map((c) => (
          <li key={c.code}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  );
}
