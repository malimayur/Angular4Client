import { Student } from './student';
import { Teacher } from './teacher';
export class Attendance {
    public id: number;
    public student: Student;
    public teacher: Teacher;
    public date: string;
    public inTime: string;
    public outTime: string;
}
