import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';



@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.page.html',
  styleUrls: ['./verify-user.page.scss'],
})
export class VerifyUserPage implements OnInit {

  getResponse: any;
  email: string;
  token: string;

  constructor(private http: HttpClient,
    private router: Router,
    private storage: Storage,
    private _urlfrom: ServiceService) { }

  ngOnInit() {
  }


  verifyEmailForm(verifyEmaildata: NgForm) {
    let url = this._urlfrom._url + "verifyEmail.php?email=" + verifyEmaildata.value.email + "&verifyCode=" + verifyEmaildata.value.verifyCode;

    this.http.get(url).subscribe((res) => {
      this.getResponse = res['message'];
      this.email = res['email'];
      this.token = res['token'];
      this.storage.set('token', this.token);
      this.storage.set('email', this.email);
      this.router.navigate(['/intro/', this.email]);
    });
  }

}//export class
