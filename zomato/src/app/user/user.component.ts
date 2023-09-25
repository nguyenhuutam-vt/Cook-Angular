import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList : any[]= []
  userObj: any = {
    userId: 0,
    emailId: '',
    fullName: '',
    password: '',
  };

  ngOnInit(): void {
    this.getAllUser();
  }

  constructor(private http: HttpClient){}

  getAllUser() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/Jira/GetAllUsers')
      .subscribe((res: any) => {
        this.userList = res.data;
        console.log('project', res.data);
      });
  }
  btn() {
    console.log('as');
  }

  onSave() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/Jira/CreateUser',
        this.userObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          this.getAllUser();
          alert('Success');
        } else {
          alert('Fail');
        }
      });
  }
}

