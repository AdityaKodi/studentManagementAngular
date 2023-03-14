import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'main-nav2',
  templateUrl: './main-nav2.component.html',
  styleUrls: ['./main-nav2.component.css']
})
export class MainNav2Component {
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public loaderService:LoaderService) {}
  showSpinner=false;
  loadData()
  {
    this.showSpinner=true;
    setTimeout(()=>{

      this.showSpinner=false;
    },5000);
  }

}
