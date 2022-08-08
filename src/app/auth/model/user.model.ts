export class User{
    id: number;
    username:string;
    role: string;
    name: string;
    password? : string;


}
export class UserDto{
    role: string;
    name: string;
    encodedCredentials : string;
    securityQuestion : string; 
    securityAnswer: string; 
}
export class UserEditDto{
    id?: number;
    name: string;
    username?: string;
    securityQuestion: string;
    securityAnswer: string;
  }
export class UserSecurityDto{
    id?: number;
    name: string;
    username?: string;
    securityQuestion: string;
  }