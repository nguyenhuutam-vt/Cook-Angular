import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectList: any[] = [];

  projectObj: any = {
    projectId: 0,
    projectName: '',
    shortName: '',
    createdDate: new Date(),
  };

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/Jira/GetAllProjects')
      .subscribe((res: any) => {
        this.projectList = res.data;
        console.log('project', res.data);
      });
  }
  btn() {
    console.log('as');
  }

  onSave() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/Jira/CreateProject',
        this.projectObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          this.getAllProject();
          alert('Success');
        } else {
          alert('Fail');
        }
      });
  }
  onClick(id: number) {
    this.http
      .delete(
        'https://freeapi.miniprojectideas.com/api/Jira/DeleteProjectById?id=' +
          id
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Delete success');
          this.getAllProject();
        }
      });
  }
}
