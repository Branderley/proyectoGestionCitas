import { Component, OnInit } from '@angular/core';

import { UserModule } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-administrar-medicos',
  templateUrl: './administrar-medicos.component.html',
  styleUrls: ['./administrar-medicos.component.css']
})
export class AdministrarMedicosComponent implements OnInit {

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
