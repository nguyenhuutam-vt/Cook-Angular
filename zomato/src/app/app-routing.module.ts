import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategorieComponent } from './categorie/categorie.component';
import { RestauratItemComponent } from './restaurat-item/restaurat-item.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserComponent } from './user/user.component';
import { BoardComponent } from './board/board.component';
import { JiraBooardComponent } from './jira-booard/jira-booard.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'users',
        component: UserComponent,
      },
      {
        path: 'board',
        component: BoardComponent,
      },
      {
        path: 'jira-board',
        component: JiraBooardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
