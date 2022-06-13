import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-administrar-login',
  templateUrl: './administrar-login.component.html',
  styleUrls: ['./administrar-login.component.css']
})
export class AdministrarLoginComponent implements OnInit {

  userList: UserModule[] = [];

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserList().snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        let x = element.payload.toJSON() as UserModule;
        x.key = element.key;
        this.userList.push(x);
      })
    });
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }
}
