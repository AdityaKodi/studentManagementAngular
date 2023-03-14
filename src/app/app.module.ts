import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, rouingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTable ,MatTableModule} from '@angular/material/table';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainNav2Component } from './main-nav2/main-nav2.component';
import {MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UpdateComponent } from './update/update.component'
import { NgxPrintModule } from 'ngx-print';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { InterceptorService } from './loader/InterceptorService';



 





@NgModule({
  declarations: [
    AppComponent,
    
    rouingComponent,
         FormComponent,
         EditComponent,
         MainNavComponent,
         NavBarComponent,
         MainNav2Component,
         UpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    NgxPrintModule,
    MatProgressBarModule
    

    
    
    
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
