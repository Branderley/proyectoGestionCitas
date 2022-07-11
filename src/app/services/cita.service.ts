import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';

import { CitaModule } from '../models/cita.module';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private citaList: AngularFireList<any>;
  selectedCita: CitaModule = new CitaModule();

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
  ) {
    this.citaList = db.list('/cita');
  }

  getCitaList() {
    return this.citaList = this.db.list('cita');
  }

  insertCita(cita: CitaModule) {
    try {
      this.citaList.push({
        fecha: cita.fecha,
        hora: cita.hora,
        typeservice: cita.typeservice,
        dniuser: cita.dniuser,
        dnidoc: cita.dnidoc,
        state: cita.state,
      })
      this.toastr.success('Operacion realizada con exito', 'Cita Insertada con exito');
    }
    catch (err) {
      console.log("error al insertar una Cita: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Registrar la Cita');
      return null;
    }
  }

  updateCita(cita: CitaModule) {
    try {
      this.citaList.update(cita.key, {
        fecha: cita.fecha,
        hora: cita.hora,
        typeservice: cita.typeservice,
        dniuser: cita.dniuser,
        dnidoc: cita.dnidoc,
        state: cita.state,
      })
      this.toastr.success('Operacion realizada con exito', 'Cita Actualizada con exito');
    }
    catch (err) {
      console.log("error al actualizar una Cita: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Actualizar la Cita');
      return null;
    }
  }

  deleteCita(key: string) {
    try {
      this.citaList.remove(key);
      this.toastr.success('Operacion realizada con exito', 'Cita Eliminada con exito');
    }
    catch (err) {
      console.log("error al eliminar una cita: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Eliminar una Cita');
      return null;
    }
  }
}
