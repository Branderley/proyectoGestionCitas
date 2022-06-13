import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { MedicoModule } from 'src/app/models/medico/medico.module';
import { MedicoService } from 'src/app/services/medico.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  constructor(
    private medicosService: MedicoService,
    private readonly userService: UserService,
    private toastr: ToastrService
    ) {
      this.medicoService;
  }

  ngOnInit() {
    this.medicoService.getMedicosList();
    this.resetForm();
  }

  onSubmit(medicoForm: NgForm) {
    if (medicoForm.value.key == null)
      this.medicoService.insertMedico(medicoForm.value);
    else
      this.medicoService.updateMedico(medicoForm.value);

    this.ngOnInit();
    this.toastr.success('Operacion realizada con exito');
  }

  resetForm(medicoForm?: NgForm) {
    if(medicoForm != null)
      medicoForm.reset();
      this.medicoService.selectedMedico = new MedicoModule();
  }

  get medicoService() {
    return this.medicosService;
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }
}
