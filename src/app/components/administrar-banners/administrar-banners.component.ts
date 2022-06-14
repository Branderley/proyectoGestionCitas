import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-administrar-banners',
  templateUrl: './administrar-banners.component.html',
  styleUrls: ['./administrar-banners.component.css']
})
export class AdministrarBannersComponent implements OnInit {

  userList: UserModule[] = [];

  constructor(
    private readonly userService: UserService,
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
