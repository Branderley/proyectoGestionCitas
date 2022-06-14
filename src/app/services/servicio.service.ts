import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';
import { ServicioModule } from '../models/servicio.module';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private servicioList: AngularFireList<any>;
  selected: ServicioModule = new ServicioModule();

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
  ) {
    this.servicioList = db.list('/servicio');
  }

  getServicioList() {
    return this.servicioList = this.db.list('/servicio');
  }

  insertServicio(servicio: ServicioModule) {
    try {
      this.servicioList.push({
        name: servicio.name,
        time: servicio.time,
      })
      this.toastr.success('Operación realizada con exito');
    }
    catch (err) {
      console.log("error al insertar un Servicio: ", err);
      this.toastr.error("Compruebe que todo este correcto", "Error al Registrar un Servicio");
      return null;
    }
  }

  updateServicio(servicio: ServicioModule) {
    try {
      this.servicioList.update(servicio.key,{
        name: servicio.name,
        time: servicio.time,
      })
      this.toastr.success('Operación realizada con exito');
    }
    catch (err) {
      console.log("error al actualizar un servicio: ", err);
      this.toastr.error("Compruebe que todo este correcto", "Error al Actualizar un Servicio");
      return null;
    }
  }

  deleteServicio(key: string) {
    try {
      this.servicioList.remove(key);
      this.toastr.success´("Operación realizada con exito");
    }
    catch (err) {
      console.log("error al eliminar un servicio: ", err);
      this.toastr.error("Comprueba que todo este correcto", "Error al Eliinar un Servicio");
      return null;
    }
  }
}
