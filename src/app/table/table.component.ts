import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

import {Observable} from'rxjs/index'
import { Route, Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

import { IStudent } from '../student';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'tableaa',
  templateUrl:'./table.component.html',
  styleUrls: ['./table.component.css']
  
  
  
})
export class TableComponent implements OnInit{
  @ViewChild(MatPaginator) paginator:MatPaginator | any;
  showSpinner=false;
  loadData()
  {
    this.showSpinner=true;
    setTimeout(()=>{

      this.showSpinner=false;
    },5000);
  }
  public students:IStudent[]=[];
  public deleteMessage="";
  displayColumn:string[]=['Regid','FirstName','secondName','Email','FatherName','Action'];
  
  constructor(private _studentSerrvice:StudentServiceService ,private router:Router)
  {

  }
  ngOnInit() {
      this._studentSerrvice.getStudents().subscribe(data=>this.students=data);
      
  }
  onSelect(stu:IStudent){

    this.router.navigate(['/Students',stu.id]);

  }
  delete(id:number)
  {
    Swal.fire({
      title:"are you sure want to remove?",
      text:"the student will be deleted",
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes ,delete it',
      cancelButtonText:'No,keep it'

    }).then((result=>{
      if(result.value){
        this._studentSerrvice.deleteStudent(id).subscribe(data=>console.log('success',data));
        Swal.fire(
        'deleted',
        'the student has deleted',
        'success'
        )
        

      }
      else if(result.dismiss===Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelled',
          'the tudent has not been deleted',
          'error'
          
        )
      }
    }))
    
  }
  edit(id:number)
{
  
  this.router.navigate(['/Update',id]);
  
}
print(stu:IStudent)
{
  
}

}
