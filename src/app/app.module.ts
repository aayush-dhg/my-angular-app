import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './service/employee.service';
import { ArrayComponent } from './components/array/array.component';
import { CalcComponent } from './components/calc/calc.component';
import { AddressComponent } from './components/address/address.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeAddReactiveComponent } from './components/employee-add-reactive/employee-add-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { EmployeeStatComponent } from './components/employee/employee-stat/employee-stat.component';
import { EmployeeListComponentRxjs } from './components/employee/employee-list/employee-list.component';
import { EmployeeAddComponentRxjs } from './components/employee/employee-add/employee-add.component';
import { LoginComponent } from './auth/component/login/login.component';
import { LogoutComponent } from './auth/component/logout/logout.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { ProfileComponent } from './auth/component/profile/profile.component';
import { VendorComponent } from './components/vendor/vendor/vendor.component';
import { VendorListComponent } from './components/vendor/vendor-list/vendor-list.component';
import { PasswordResetComponent } from './auth/component/password-reset/password-reset.component';
import { UsernameVerifyComponent } from './auth/component/username-verify/username-verify.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    CalcComponent,
    AddressComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeAddReactiveComponent,
    PostComponent,
    CommentsComponent,
    DashboardComponent,
    CategoryComponent,
    EmployeeComponent,
    EmployeeStatComponent,
    EmployeeAddComponentRxjs,
    EmployeeListComponentRxjs,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    ProfileComponent,
    VendorComponent,
    VendorListComponent,
    PasswordResetComponent,
    UsernameVerifyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
