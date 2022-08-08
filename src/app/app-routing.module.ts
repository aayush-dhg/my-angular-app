import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { AuthguardService } from './auth/service/authguard.service';
import { LoginComponent } from './auth/component/login/login.component';
import { LogoutComponent } from './auth/component/logout/logout.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { ProfileComponent } from './auth/component/profile/profile.component';
import { VendorComponent } from './components/vendor/vendor/vendor.component';
import { PasswordResetComponent } from './auth/component/password-reset/password-reset.component';
import { UsernameVerifyComponent } from './auth/component/username-verify/username-verify.component';

const routes: Routes = [
  {path:'' ,component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'posts', component: PostComponent},
  {path:'comments/:postId', component: CommentsComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'vendor', component: VendorComponent},
  {path: 'employee' , component: EmployeeComponent, 
                      canActivate:[AuthguardService]},
  {path: 'logout', component: LogoutComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent,
                    canActivate:[AuthguardService]},
  {path: 'password-reset', component: UsernameVerifyComponent},
  {path: 'password-reset-form', component: PasswordResetComponent}
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
