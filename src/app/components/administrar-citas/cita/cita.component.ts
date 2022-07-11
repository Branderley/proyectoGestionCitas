import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CitaModule } from 'src/app/models/cita.module';
import { MedicoModule } from 'src/app/models/medico.module';
import { ServicioModule } from 'src/app/models/servicio.module';
import { UserModule } from 'src/app/models/user.module';
import { CitaService } from 'src/app/services/cita.service';
import { MedicoService } from 'src/app/services/medico.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  userList: UserModule[] = [];
  medicoList: MedicoModule[] = [];
  servicioList: ServicioModule[] = [];
  form: FormGroup;

  constructor(
    private citasService: CitaService,
    private readonly userService: UserService,
    private readonly medicoService: MedicoService,
    private readonly servicioService: ServicioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.citaService;
    this.buildForm();
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

    this.servicioService.getServicioList().snapshotChanges().subscribe(item => {
      this.servicioList = [];
      item.forEach(element => {
        let x = element.payload.toJSON() as ServicioModule;
        x.key = element.key;
        this.servicioList.push(x);
      })
    });

    this.citaService.selectedCita.state = "Pendiente";
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.form.value.key == null)
        this.citaService.insertCita(this.form.value);
      else
        this.citaService.updateCita(this.form.value);

      this.ngOnInit();
      this.resetForm();
    } else {
      this.toastr.error("Error al querer registrar una cita", "Error");
      this.form.markAllAsTouched();
    }
  }

  resetForm() {
    this.form.reset();
  }

  get citaService() {
    return this.citasService;
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      typeservice: ['', [Validators.required]],
      dnidoc: ['', [Validators.required]],
      dniuser: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  get fechaField() {
    return this.form.get('fecha');
  }

  get horaField() {
    return this.form.get('hora');
  }

  get typeserviceField() {
    return this.form.get('typeservice');
  }

  get dnidocField() {
    return this.form.get('dnidoc');
  }

  get dniuserField() {
    return this.form.get('dniuser');
  }

  get stateFied() {
    return this.form.get('state');
  }
}
