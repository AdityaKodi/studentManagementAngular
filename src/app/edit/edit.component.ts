import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Student1 } from '../student1';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  
  


  constructor(private _service:StudentServiceService,private router:Router){

  }
  fN:any='';
  sN:any='';
  eI:any='';
  faN:any='';

  check:any;
  ngOnInit()
  {
    this.check=0;
    
   
  /*this.fN=this.studentForm.controls['firstName'].value;
  this.sN=this.studentForm.controls['secondName1'].value;
  this.eI=this.studentForm.controls['emailId1'].value;
  this.faN=this.studentForm.controls['fatherName1'].value;*/
    
 
  }
  studentForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    secondName:new FormControl(''),
    emailId:new FormControl('',[Validators.required, Validators.email]),
    fatherName:new FormControl('')
  });
  /*FN=this.studentForm.get('firstName1');
  SN=this.studentForm.get('secondName1');
  EI=this.studentForm.get('emailId1');
  FaN=this.studentForm.get('fatherName1');*/
  

   
  
  
  
  submit()
  {
    this._service.postStudent(this.studentForm.value).subscribe(data=>Swal.fire(
      'SUCCESS!',
      'The student Has Been Created',
      'success'
      ));
    
   /* console.log(this.studentForm.value);
    console.log(this.fN);
    console.log(this.FN?.value)*/
  }
  GoBack()
  {
    this.router.navigate(['/Students']);
  }
}
