import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  email: any;
  getResponse: string;
  token: string;

  constructor(private http: HttpClient,
    private router: Router,
    private activerRouter: ActivatedRoute,
    private storage: Storage,
    private _urlfrom: ServiceService) { }

  ngOnInit() {
  }

  resetPasswordForm(resetPasswordData: NgForm) {
    this.email = this.activerRouter.snapshot.params.email;
    this.storage.clear();
    if (resetPasswordData.value.password == resetPasswordData.value.confirmPassword) {

      let data = {
        email: this.email,
        password: resetPasswordData.value.password
      };
      let url = this._urlfrom._url + "resetPassword.php";

      this.http.post(url, data).subscribe((res) => {
        this.getResponse = res['message'];
        this.email = res['email'];
        this.token = res['token'];
        this.storage.set('token', this.token);
      });
      this.router.navigate(['/intro/', this.email]);


    } else {
      this.getResponse = "Password and confirm password dose not match."
    }




  }//Reset form

}//export class
