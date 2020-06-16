import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  getResponse: any;
  verified: number;
  token: string;

  constructor(private http: HttpClient,
    private router: Router,
    private storage: Storage,
    private _urlfrom: ServiceService
  ) { }

  ngOnInit() {
    this.storage.set('s', 'joydey');

  }



  logInForm(logInData: NgForm) {



    let data = {
      email: logInData.value.email,
      password: logInData.value.password
    };
    let url = this._urlfrom._url + "login.php";

    this.http.post(url, data).subscribe((res) => {
      this.getResponse = res['message'];
      this.email = res['email'];
      this.token = res['token'];
      this.verified = res['verified'];

      if (this.verified == 0) {
        this.router.navigate(['/verify-user']);
      } else {

        this.storage.set('token', this.token);
        this.storage.set('email', this.email);
        this.router.navigate(['/intro', this.email]);

      }

    });
  }//loginForm

}//export class
