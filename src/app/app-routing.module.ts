import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TableComponent } from './table/table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'students',component:TableComponent},
  {path:'Students',component:TableComponent},
  {path:'Students/:id',component:StudentDetailsComponent},
  {path:'DataTable',component:DataTableComponent},
  {path:'New',component:FormComponent},
  {path:'Update/:id',component:UpdateComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rouingComponent=[TableComponent,StudentDetailsComponent,DataTableComponent]