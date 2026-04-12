import { Subject } from "../types";

export const DEPARTMENTS =
  ['CS','Math','English',];
export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept)=>
  ({
    value:dept,
    label:dept,
  }));

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    courseCode: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "Fundamentals of programming, data structures, and algorithms.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    courseCode: "MATH201",
    name: "Linear Algebra",
    department: "Math",
    description: "Vector spaces, linear transformations, matrices, and determinants.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    courseCode: "ENG301",
    name: "Advanced English Literature",
    department: "English",
    description: "In-depth study of classic and contemporary English literary works.",
    createdAt: new Date().toISOString(),
  },
];
