import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { AuthguardService } from './auth/service/authguard.service';
import { LoginComponent } from './auth/component/login/login.component';

const routes: Routes = [
  {path:'' ,component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'posts', component: PostComponent},
  {path:'comments/:postId', component: CommentsComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'employee' , component: EmployeeComponent, canActivate:[AuthguardService]},
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
