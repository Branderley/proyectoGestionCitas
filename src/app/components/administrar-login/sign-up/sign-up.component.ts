import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModule } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userService: UserService;

  constructor(
    private usersService: UserService,
    private router: Router
  ) {
    this.userService = this.usersService;
  }

  ngOnInit(): void {
    this.resetForm();
  }

  registrar(userForm: NgForm){
    this.userService.register(userForm.value).then(res => {
      this.router.navigate(['/administrar-user', userForm.value]);
    });
  }

  resetForm(userForm?: NgForm) {
    if(userForm != null)
      userForm.reset();
      this.userService.selectedUser = new UserModule();
  }
}
