import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  getResponse: any;
  email: string;
  status: boolean;


  constructor(private http: HttpClient,
    private router: Router,
    private storage: Storage,
    private _urlfrom: ServiceService) { }

  ngOnInit() {
  }

  forgotEmailForm(forgotEmaildata: NgForm) {

    let url = this._urlfrom._url + "forgotPassword.php?email=" + forgotEmaildata.value.email;

    this.http.get(url).subscribe((res) => {
      this.status = res['status'];
      if (this.status == true) {
        this.router.navigate(['/vefifyreset-password']);
      }
      else {
        this.getResponse = res['message'];
      }

    });
  }

}//export class
