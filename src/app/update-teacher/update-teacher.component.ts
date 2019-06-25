
import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateTeacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent implements OnInit {
public TeacherObject:any;
public TeacherID:number;
  constructor(private _mainService:MainserviceService,
    private activatedRoute: ActivatedRoute
     ) { }

  ngOnInit() {


    this.TeacherID = +this.activatedRoute.snapshot.params['id'];
    this.retriveTeacherData();
    //console.log();

  }


  public retriveTeacherData = () =>{

    this._mainService.getTeacher(this.TeacherID).subscribe(
      data => {
        this.TeacherObject = data;
        console.log(this.TeacherObject);
      },
      err => {
        console.log(err);
      },
      () => {
        //this.loading = false;
      }
    );



  }

  submit = (ref: any) => {
    console.log(ref);
    ref.value.Img = "assets/images/faces-clipart/pic-1.png";
    console.log(ref.value);

    this._mainService.updateTeacher(this.TeacherID, ref.value).subscribe(
      data => {
        alert('Teacher Was Updated');
      },
      err => {
        console.log(err);
      },
      () => {
        //this.loading = false;
      }
    );



  }




}

