import { Student } from './student';
import { Subject } from './subject';
import { Teacher } from './teacher';
export class Enrollment {
    public id: number;
    public student: Student;
    public teacher: Teacher;
    public subject: Subject;
    public startDate: string;
    public endDate: number;
    public hours: number;
    public amount: number;
    public paymentType: string;
    public location: string;
}
