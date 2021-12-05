import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../interfaces';
import { AuthService } from '../shared/components/admin-layout/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  form:FormGroup
  submitted = false
  message:string



  constructor(
    public auth:AuthService,
    private rout:Router,
    private router:ActivatedRoute
  ) { }

  ngOnInit(){
     this.router.queryParams.subscribe((params:Params) => {
       if(params ['EnterLogin']) {
         this.message = 'Please enter the date'

       }else if(params['authFaild']) {
         this.message ="session expired, log in please" 
       }
     })


    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }
 submit(){

  if(this.form.invalid){
    return
  }
  
this.submitted = true

  const user: User = {
    email: this.form.value.email,
    password: this.form.value.password,
    
  }
   this.auth.login(user).subscribe(()=>{
     this.form.reset()
     this.rout.navigate(['/admin','dashboard'])
     
     this.submitted = false
   })
 }
}

