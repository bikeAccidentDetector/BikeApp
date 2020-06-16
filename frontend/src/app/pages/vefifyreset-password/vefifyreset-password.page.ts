import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';



@Component({
  selector: 'app-vefifyreset-password',
  templateUrl: './vefifyreset-password.page.html',
  styleUrls: ['./vefifyreset-password.page.scss'],
})
export class VefifyresetPasswordPage implements OnInit {
  getResponse: any;
  email: string;
  status: boolean;

  constructor(private http: HttpClient,
    private router: Router,
    private _urlfrom: ServiceService) { }


  ngOnInit() {
  }


  verifyResetPasswordForm(verifyResetPassworddata: NgForm) {
    let url = this._urlfrom._url + "verifyResetPassword.php?email=" + verifyResetPassworddata.value.email + "&verifyCode=" + verifyResetPassworddata.value.verifyCode;

    this.http.get(url).subscribe((res) => {
      this.getResponse = res['message'];
      this.status = res['status'];
      if (this.status == true) {
        this.router.navigate(['/reset-password/', this.email]);
      }
    });
  }

}
