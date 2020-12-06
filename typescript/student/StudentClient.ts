import { Student } from './Student';

function StudentClient() {
  let obj = new Student(1001, 'Sonu');

  obj.display();
}

StudentClient();
