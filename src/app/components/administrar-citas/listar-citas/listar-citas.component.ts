import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CitaModule } from 'src/app/models/cita.module';
import { UserModule } from 'src/app/models/user.module';
import { CitaService } from 'src/app/services/cita.service';
import { UserService } from 'src/app/services/user.service';
import { CitaComponent } from '../cita/cita.component';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {

  citaList: CitaModule[] = [];
  userList: UserModule[] = [];
  cita: CitaComponent;

  constructor(
    private readonly userService: UserService,
    private citasService: CitaService,
    private toastr: ToastrService
  ) {
    //this.citaService;
  }

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

  onEdit(citaSelect: CitaModule){

  }

  onDelete(key: string){
    if(confirm('¿Estas seguro de querer eliminarlo?')) {
      this.citaService.deleteCita(key);
    }
  }

  get citaService() {
    return this.citasService;
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }
}
