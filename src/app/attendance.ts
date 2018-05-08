import { Student } from './student';
import { Teacher } from './teacher';
export class Attendance {
    public id: number;
    public studentId: number;
    public teacherId: number;
    public date: string;
    public intime: string;
    public outtime: string;
}
