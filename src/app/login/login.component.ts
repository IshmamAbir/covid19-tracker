import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string='ishmam';
  password:string;
  message:string=' ';


  onLoginClick(){
    if (this.userName==='ishmam') {
      if (this.password === '1233') {
        //console.log(this.password)
        this.router.navigate(['/home'])
      }
      else{
        this.message = 'Password is wrong. Use default pass <1233>'
      }
      console.log(this.password)
    }
    else{
      this.message = 'Username is incorrect. Use default id <ishmam>'
    }
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
