import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  username: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //let username = this.actRouter.snapshot.params['username'];
    //console.log(this.actRouter.snapshot.paramMap[]);
    //console.log(this.actRouter.snapshot.paramMap);
    this.authService.username$.subscribe(data=>{
      this.username = data;
      console.log(data);
    })
  }

}
