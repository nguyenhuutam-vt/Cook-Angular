import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategorieComponent } from './categorie/categorie.component';
import { RestauratItemComponent } from './restaurat-item/restaurat-item.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoardComponent } from './board/board.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JiraBooardComponent } from './jira-booard/jira-booard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategorieComponent,
    RestauratItemComponent,
    CreateOrderComponent,
    ProjectsComponent,
    BoardComponent,
    LayoutComponent,
    UserComponent,
    JiraBooardComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
