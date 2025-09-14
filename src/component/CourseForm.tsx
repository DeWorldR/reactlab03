import React, { useState, ChangeEvent, FormEvent } from "react";

// ประกาศ type ตรงนี้เลย
interface Course {
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade?: string;
}

interface Props {
  onAdd: (course: Course) => void;
}

export default function CourseForm({ onAdd }: Props): JSX.Element {
  const [form, setForm] = useState<Course>({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 0,
    teacher: "",
    grade: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "credit" ? Number(value) : value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(form);
    setForm({ code: "", nameTH: "", nameEN: "", credit: 0, teacher: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="code" placeholder="รหัสวิชา" value={form.code} onChange={handleChange} required />
      <input name="nameTH" placeholder="ชื่อวิชา (ไทย)" value={form.nameTH} onChange={handleChange} />
      <input name="nameEN" placeholder="ชื่อวิชา (อังกฤษ)" value={form.nameEN} onChange={handleChange} />
      <input name="credit" type="number" placeholder="หน่วยกิต" value={form.credit} onChange={handleChange} />
      <input name="teacher" placeholder="อาจารย์ผู้สอน" value={form.teacher} onChange={handleChange} />
      <select name="grade" value={form.grade} onChange={handleChange}>
        <option value="">--เลือกเกรด--</option>
        <option>A</option>
        <option>B+</option>
        <option>B</option>
        <option>C+</option>
        <option>C</option>
        <option>D+</option>
        <option>D</option>
        <option>F</option>
      </select>
      <button type="submit">เพิ่มวิชา</button>
    </form>
  );
}
