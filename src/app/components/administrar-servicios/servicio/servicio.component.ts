import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ServicioModule } from 'src/app/models/servicio.module';
import { ServicioService } from 'src/app/services/servicio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor(
    private serviciosService: ServicioService,
    private readonly userService: UserService,
  ) {
    this.servicioService;
  }

  ngOnInit(): void {
    this.servicioService.getServicioList();
    this.resetForm();
  }

  onSubmit(servicioForm: NgForm) {
    if (servicioForm.value.key == null)
      this.servicioService.insertServicio(servicioForm.value);
    else
      this.servicioService.updateServicio(servicioForm.value);

    this.ngOnInit();
  }

  resetForm(servicioForm?: NgForm) {
    if(servicioForm != null)
      servicioForm.reset();
      this.servicioService.selectedServicio = new ServicioModule();
  }

  get servicioService() {
    return this.serviciosService;
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }
}
