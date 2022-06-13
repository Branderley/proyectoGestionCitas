import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Ingresar() {
    console.log(this.user);
    const { email, password } = this.user;
    this.userService.login(email, password).then(res => {
      console.log("se registro: ", res);
      this.router.navigate(['/administrar-user']);
    })
  }
}
