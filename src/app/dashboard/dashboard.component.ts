import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  public TeachersArray:any[] = [];

  constructor(private  _mainService:MainserviceService) { }

  ngOnInit() {

    this.retriveData();

  }

  public  sampleFunction = () => {

    console.log('test');

  }


    // Load Data
    public retriveData = () => {

      this._mainService.getTeachers().subscribe(
        data => {
          this.TeachersArray = data;
          //console.log(data);
        },
        err => {
          console.log(err);
        },
        () => {
          //this.loading = false;
        }
      );

    }

    public deleteTeacher = (id:number) => {

      if(confirm("Are you sure to delete ?")) {

        this._mainService.deleteTeacher(id).subscribe(
          data => {
            console.log('Done')
            this.retriveData();
          },
          err => {
            console.log(err);
          },
          () => {
            //this.loading = false;
          }
        );
      }

      /**/








    }












}
