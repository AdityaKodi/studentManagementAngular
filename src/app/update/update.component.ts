import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student1 } from '../student1';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit{
  public student:any;
public std=new Student1('','','','');
constructor(private route:ActivatedRoute,private _studentService:StudentServiceService,private router:Router){}
ngOnInit()
{
  let id=Number(this.route.snapshot.paramMap.get('id'));
    this._studentService.getStudentById(id).subscribe(data=>this.student=data);
}
onsubmit()
{
  console.log("on submt");
  this._studentService.updateStudent(this.student);
  
  

}
GoBack()
{
  this.router.navigate(['/Students']);
}
}

