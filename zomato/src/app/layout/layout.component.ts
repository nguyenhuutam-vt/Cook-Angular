import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JiraService } from '../serve/jira.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  projectList: any[] = [];
  userList: any[] = [];
  issueTypes: string[] = ['Ticket', ' Defect', 'RnD Word'];
  status: string[] = ['To Do', 'In Progress', 'Done'];

  ticketObj: any = {
    ticketId: 0,
    createdDate: new Date(),
    summary: '',
    status: '',
    description: '',
    parentId: 0,
    storyPoint: 0,
    ticketGuid: '',
    assignedTo: 0,
    createdBy: 0,
    projectId: 0,
  };

  constructor(private http: HttpClient, private master: JiraService) {
    const loginData = localStorage.getItem('jiraLogin');
    if (loginData != null) {
      const paserData = JSON.parse(loginData);
      this.ticketObj.createdBy = paserData.userId;
    }
  }

  setProject(obj: any) {
    debugger;
    this.master.onProjectChange.next(obj);
  }

  ngOnInit(): void {
    this.getAllProject();
    this.getAllUser();
  }

  getAllProject() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/Jira/GetAllProjects')
      .subscribe((res: any) => {
        this.projectList = res.data;
        console.log('project', res.data);
        this.master.onProjectChange.next(this.projectList[0]);
      });
  }
  getAllUser() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/Jira/GetAllUsers')
      .subscribe((res: any) => {
        this.userList = res.data;
        console.log('project', res.data);
      });
  }

  onTicketCareate() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/Jira/CreateTicket',
        this.ticketObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Success');
          this.master.onTicketCreate.next(true);
        } else {
          alert('Fail');
        }
      });
  }
}
