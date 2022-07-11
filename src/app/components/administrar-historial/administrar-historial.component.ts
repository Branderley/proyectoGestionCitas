import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { UserModule } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';
import { CitaModule } from 'src/app/models/cita.module';
import { CitaService } from 'src/app/services/cita.service';
import { CitaComponent } from '../administrar-citas/cita/cita.component';

@Component({
  selector: 'app-administrar-historial',
  templateUrl: './administrar-historial.component.html',
  styleUrls: ['./administrar-historial.component.css']
})
export class AdministrarHistorialComponent implements OnInit {

  userList: UserModule[] = [];
  citaList: CitaModule[] = [];
  cita: CitaComponent;

  constructor(
    private readonly userService: UserService,
    private citasService: CitaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.citaService.getCitaList().snapshotChanges().subscribe(item => {
      this.citaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON() as CitaModule;
        x.key = element.key;
        this.citaList.push(x);
      })
    });

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

  get citaService() {
    return this.citasService;
  }
}
