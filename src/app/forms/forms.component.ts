import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private _mainService:MainserviceService ) { }

  ngOnInit() {
  }

  submit = (ref: any) => {
    console.log(ref);
    ref.value.Img = "assets/images/faces-clipart/pic-1.png";
    console.log(ref.value);
    //console.log(ref.value);

    this._mainService.createTeacher(ref.value).subscribe(
      data => {
        //this.TeachersArray = data;
        //console.log(data);
        alert('Teacher Was Created');
        console.log('its done');
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
