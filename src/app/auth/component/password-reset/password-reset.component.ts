import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  username: string;
  password: string;
  repassword: string;
  error_msg: string;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    //let username = this.actRouter.snapshot.params['username'];
    //console.log(this.actRouter.snapshot.paramMap[]);
    //console.log(this.actRouter.snapshot.paramMap);
    this.error_msg="";
    this.authService.user$.subscribe(data=>{
      this.username = data;
      
    })
  }
  onReset(){
    if(this.password === this.repassword){
      this.authService.resetPassword(this.username, this.password).subscribe({
        next: (data)=>{
          this.authService.message$.next('Password Reset Successful, Please Login!!');
          this.router.navigateByUrl('/login');
        },
        error: (e)=> {
          this.error_msg = "Password could be reset  at this time!";
        }
      });
    }

  }

}
