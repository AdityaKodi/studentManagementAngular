import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { IStudent } from './student';
import { Student1 } from './student1';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }
  getStudents():Observable<IStudent[]>
  {
    setTimeout(()=>{},3000);
    return this.http.get<IStudent[]>('https://localhost:44309/api/GetStudents');
  }
  getStudentById(id: Number)
  {
    return this.http.get<IStudent>('https://localhost:44309/api/GetStudentsById/'+id);
  }
  postStudent(student :any)
  { 
    return this.http.post<any>('https://localhost:44309/api/CreateStudents',student);
  }
  deleteStudent(id:Number)
  {
    return this.http.delete('https://localhost:44309/api/DeleteStudents/'+id);
  }
  updateStudent(student:any):any
  {
    this.http.put('https://localhost:44309/api/updateStudent/'+student.id,student)
    .subscribe(response=> Swal.fire(
      'Updated',
      'the student has Updated',
      'success'
      ));
  }
 
}
