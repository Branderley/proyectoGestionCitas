import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';

import { HoraModule } from '../models/hora.module';

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  private horaList: AngularFireList<any>;
  selectedHora: HoraModule = new HoraModule();

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
  ) {
    this.horaList = db.list('/hora');
  }

  getHoraList() {
    return this.horaList = this.db.list('hora');
  }

  insertHora(hora: HoraModule) {
    try {
      this.horaList.push({
        fecha: hora.fecha,
        hora: hora.hora,
        state: hora.state,
      })
      this.toastr.success('Operacion realizada con exito');
    }
    catch (err) {
      console.log("error al insertar una Hora: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Registrar la Hora');
      return null;
    }
  }

  updateHora(hora: HoraModule) {
    try {
      this.horaList.update(hora.key, {
        state: hora.state,
      })
      this.toastr.success('Operacion realizada con exito');
    }
    catch (err) {
      console.log("error al actualizar una Hora: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Actualizar la Hora');
      return null;
    }
  }

  deleteHora(key: string) {
    try {
      this.horaList.remove(key);
      this.toastr.success('Operacion realizada con exito');
    }
    catch (err) {
      console.log("error al eliminar una hora: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Eliminar una Hora');
      return null;
    }
  }
}
