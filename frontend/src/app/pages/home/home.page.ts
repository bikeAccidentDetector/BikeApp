import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  email: any;
  token: any;

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

}
