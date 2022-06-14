import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CitaModule } from 'src/app/models/cita.module';
import { MedicoModule } from 'src/app/models/medico.module';
import { UserModule } from 'src/app/models/user.module';
import { CitaService } from 'src/app/services/cita.service';
import { MedicoService } from 'src/app/services/medico.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  userList: UserModule[] = [];
  medicoList: MedicoModule[] = [];

  constructor(
    private citasService: CitaService,
    private readonly userService: UserService,
    private medicoService: MedicoService,
  ) {
    this.citaService;
  }

  ngOnInit(): void {
    this.citaService.getCitaList();
    this.resetForm();

    this.userService.getUserList().snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        let x = element.payload.toJSON() as UserModule;
        x.key = element.key;
        this.userList.push(x);
      })
    });
    this.medicoService.getMedicosList().snapshotChanges().subscribe(item => {
      this.medicoList = [];
      item.forEach(element => {
        let x = element.payload.toJSON() as MedicoModule;
        x.key = element.key;
        this.medicoList.push(x);
      })
    });
    this.citaService.selectedCita.state = "Pendiente";
  }

  onSubmit(citaForm: NgForm) {
    if (citaForm.value.key == null)
      this.citaService.insertCita(citaForm.value);
    else
      this.citaService.updateCita(citaForm.value);

    this.ngOnInit();
  }

  resetForm(citaForm?: NgForm) {
    if(citaForm != null)
      citaForm.reset();
      this.citaService.selectedCita= new CitaModule();
  }

  get citaService() {
    return this.citasService;
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }
}
