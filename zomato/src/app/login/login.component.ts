import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    userId: 0,
    emailId: 'string',
    fullName: 'string',
    password: 'string',
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/Jira/Login',
        this.loginObj
      )
      .subscribe((res: any) => {
        debugger;
        if (res.message === 'User Found Successfully') {
          localStorage.setItem('jiraLogin', JSON.stringify(res.data));
          alert('true');
          this.router.navigateByUrl('');
        } else {
          alert('Wrong');
        }
      });
  }
}
