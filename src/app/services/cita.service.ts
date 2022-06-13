import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';

import { CitaModule } from '../models/cita/cita.module';

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
        emailuser: cita.emailuser,
        dnidoc: cita.dnidoc,
        state: cita.state,
      })
      this.toastr.success('Operacion realizada con exito');
    }
    catch (err) {
      console.log("error al insertar una Cita: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Registrar la Cita');
      return null;
    }
  }

  updateCita(cita: CitaModule) {
    this.citaList.update(cita.key, {
      fecha: cita.fecha,
      hora: cita.hora,
      typeservice: cita.typeservice,
      emailuser: cita.emailuser,
      dnidoc: cita.dnidoc,
      state: cita.state,
    })
  }
  deleteCita(key: string) {
    this.citaList.remove(key);
  }
}
