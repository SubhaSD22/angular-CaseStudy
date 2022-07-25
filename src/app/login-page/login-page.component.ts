
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
}
  onSubmit(Form:NgForm){
    var name = Form.value.password;

    console.log(Form.value.password);
    console.log(Form.value.userName);
    this.router.navigate(['/employees']);
  }



}
