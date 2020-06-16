import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {


  email: string;

  constructor(private router: Router,
    private activerRouter: ActivatedRoute,
    private storage: Storage,) { }


  ngOnInit() {
    this.email = this.activerRouter.snapshot.params.email;
    this.router.navigate(['/intro/' + this.email + '/dashboard']);
  } // ngOnInit





}//export class
