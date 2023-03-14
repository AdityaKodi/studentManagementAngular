import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student1 } from '../student1';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit{
  public id:any;
  
  constructor(private route:ActivatedRoute, private _service:StudentServiceService){}
public email:string="Email";
test="";
public std=new Student1('First Name','Second Name','E Mail Address','Father Name');
onSubmit()
{
  console.log(this.std);
  this._service.postStudent(this.std).subscribe(data=>console.log('success',data));
  
  

  
}
ngOnInit() {
  /*let id=Number(this.route.snapshot.paramMap.get('id'));
 if(this.id>0)
 {
  
 }*/
    
}
}
