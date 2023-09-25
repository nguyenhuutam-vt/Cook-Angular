import { Component } from '@angular/core';

@Component({
  selector: 'app-jira-booard',
  templateUrl: './jira-booard.component.html',
  styleUrls: ['./jira-booard.component.css'],
})
export class JiraBooardComponent {
  ticketArray: any[] = [
    {
      ticketId: 'Jira-01',
      ticketName: 'Latout Page',
      status: 'In Progress',
    },
    {
      ticketId: 'Jira-02',
      ticketName: 'Latout Page',
      status: 'In Progress',
    },
    {
      ticketId: 'Jira-03',
      ticketName: 'Latout Page',
      status: 'In Progress',
    },
    {
      ticketId: 'Jira-04',
      ticketName: 'Latout Page',
      status: 'To Do',
    },
    {
      ticketId: 'Jira-05',
      ticketName: 'Latout Page',
      status: 'To Do',
    },
    {
      ticketId: 'Jira-06',
      ticketName: 'Latout Page',
      status: 'To Do',
    },
    {
      ticketId: 'Jira-07',
      ticketName: 'Latout Page',
      status: 'Done',
    },
    {
      ticketId: 'Jira-08',
      ticketName: 'Latout Page',
      status: 'Done',
    },
  ];

  currentItem: any;
  fillterTickets(status: string) {
    return this.ticketArray.filter((m) => m.status == status);
  }
  onDragStart(item: any) {
    this.currentItem = item;
    console.log('onDragStart');
  }
  onDrop(event: any, status: string) {
    console.log('onDrop');
    event.prventDefault();
    const record = this.ticketArray.find(
      (m) => m.ticketId == this.currentItem.ticketId
    );
    if (record! == undefined) {
      record.status = status;
    }
    this.currentItem = null;
  }
  onDragOver(event: any) {
    event.prventDefault();
    console.log('onDragOver');
  }
}
