import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { MedicoModule } from 'src/app/models/medico.module';
import { MedicoService } from 'src/app/services/medico.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})
export class ListarMedicosComponent implements OnInit {

  medicoList: MedicoModule[] = [];

  constructor(
    private readonly userService: UserService,
    private medicoService: MedicoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.medicoService.getMedicosList().snapshotChanges().subscribe(item => {
      this.medicoList = [];
      item.forEach(element => {
        let x = element.payload.toJSON() as MedicoModule;
        x.key = element.key;
        this.medicoList.push(x);
      })
    });
  }

  onEdit(medico: MedicoModule){
    this.medicoService.selectedMedico = Object.assign({}, medico);
  }

  onDelete(key: string){
    if(confirm('¿Estas seguro de querer eliminarlo?')) {
      this.medicoService.deleteMedico(key);
      this.toastr.success('Operacion realizada con exito', 'Datos Eliminados');
    }
  }

  get userLogged() {
    return this.userService.getUserLogged();
  }
}
