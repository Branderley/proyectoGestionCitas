import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';

import { MedicoModule } from '../models/medico.module';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private medicoList: AngularFireList<any>;
  selectedMedico: MedicoModule = new MedicoModule();

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
  ) {
    this.medicoList = db.list('/medico');
  }

  getMedicosList() {
    return this.medicoList = this.db.list('medico');
  }

  insertMedico(medico: MedicoModule) {
    try {
      this.medicoList.push({
        name: medico.name,
        lastname: medico.lastname,
        dni: medico.dni,
        phone: medico.phone,
        specialty: medico.specialty,
        state: medico.state,
      })
      this.toastr.success('Operación realizada con exito', 'Medico Agregado');
    }
    catch (err) {
      console.log("error al insertar un Medico: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Registrar un Medico');
      return null;
    }
  }

  updateMedico(medico: MedicoModule) {
    try {
      this.medicoList.update(medico.key, {
        name: medico.name,
        lastname: medico.lastname,
        dni: medico.dni,
        phone: medico.phone,
        specialty: medico.specialty,
        state: medico.state,
      })
      this.toastr.success('Operación realizada con exito', 'Medico Actualizado');
    }
    catch (err) {
      console.log("error al actualizar un medico: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Actualizar un Medico');
      return null;
    }
  }

  deleteMedico(key: string) {
    try {
      this.medicoList.remove(key);
      this.toastr.success('Operación realizada con exito', 'Medico Eliminado');
    }
    catch (err) {
      console.log("error al eliminar un medico: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Eliminar un Medico');
      return null;
    }
  }
}
