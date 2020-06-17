import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  getResponse: any;
  errorMessage: any;
  token: string;
  email: any;

  constructor(private http: HttpClient,
    private router: Router,
    private storage: Storage,
    private _urlfrom: ServiceService) { }

  ngOnInit() {

    this.storage.get('token').then((val) => {
      this.token = val;
      this.storage.get('email').then((res) => {
        this.email = res;
        if (this.token != null && this.email != null) {
          this.router.navigate(['/intro/', this.email]);
        }
      });
    });

  }



  registrationForm(registerData: NgForm) {

    if (registerData.value.password == registerData.value.confirmPassword) {
      let data = {
        firstName: registerData.value.firstName,
        lastName: registerData.value.lastName,
        email: registerData.value.email,
        password: registerData.value.password
      };

      let url = this._urlfrom._url + "register.php";

      this.http.post(url, data).subscribe((res) => {
        this.getResponse = res['message'];
        this.router.navigate(['/verify-user']);
      });

    } else {
      this.errorMessage = " Password and Confirm Password dosen't match";
      registerData.controls['password'].reset();
      registerData.controls['confirmPassword'].reset();
    }

  }//register form


}//export class
