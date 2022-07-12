import { Component, OnInit } from '@angular/core';

import { ServicioModule } from 'src/app/models/servicio.module';
import { ServicioService } from 'src/app/services/servicio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.css']
})
export class ListarServiciosComponent implements OnInit {

  servicioList: ServicioModule[] = [];

  constructor(
    private readonly userService: UserService,
    private servicioService: ServicioService,
  ) { }

  ngOnInit(): void {
    this.servicioService.getServicioList().snapshotChanges().subscribe(item => {
      this.servicioList = [];
      item.forEach(element => {
        let x = element.payload.toJSON() as ServicioModule;
        x.key = element.key;
        this.servicioList.push(x);
      })
    });
  }

  onEdit(servicio: ServicioModule) {
    this.servicioService.selectedServicio = Object.assign({}, servicio);
  }

  onDelete(key: string) {
    if(confirm('¿Estas seguro de querer eliminarlo?')) {
      this.servicioService.deleteServicio(key);
    }
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }
}
