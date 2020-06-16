import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  email: any;
  token: any;
  firstNumber: any;
  lastNumber: any;
  message: any;
  calling: any;


  constructor(private http: HttpClient,
    private router: Router,
    private _urlfrom: ServiceService,
    private storage: Storage,
  ) { }

  ngOnInit() {

    this.storage.get('token').then((val) => {
      this.token = val;
      this.storage.get('email').then((res) => {
        this.email = res;
        if (this.token == null && this.email == null) {
          this.router.navigate(['home']);
        }
      });
    });


  }


  accidentForm(accidentData: NgForm) {

    let data = {
      gyro: accidentData.value.gyro,
      linear: accidentData.value.linear
    }

    if (data.gyro > 90 && data.linear > 30) {

      this.storage.get('email').then((val) => {
        this.email = val;
        console.log(this.email);

        let url = this._urlfrom._url + "call.php?email=" + this.email;
        this.http.get(url).subscribe((res) => {
          this.firstNumber = res['firstNumber'];
          this.lastNumber = res['lastNumber'];
          this.message = res['message'];
          this.calling = res['calling'];
        });
      });
    } else {
      this.message = "minor accident";
    }

  } // accidentForm



  logOut() {
    this.router.navigate(['home']);
    this.storage.remove('email');
    this.storage.remove('token');
  }

}
