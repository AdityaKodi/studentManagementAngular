import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IStudent } from '../student';
import { StudentServiceService } from '../student-service.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public StudentId: any;
  public student:any;
  constructor(private route:ActivatedRoute,private _studentService:StudentServiceService,private router:Router){}
  ngOnInit(){
    let id=Number(this.route.snapshot.paramMap.get('id'));
    this._studentService.getStudentById(id).subscribe(data=>this.student=data);
   
    this.StudentId=id;
  }
  GoBack()
  {
    this.router.navigate(['/Students']);
  }

  
}
