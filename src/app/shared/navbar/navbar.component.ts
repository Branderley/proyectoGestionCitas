import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userList:UserModule[] = [];
  rank="client";

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

  logout() {
    this.userService.logout();
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }
}
