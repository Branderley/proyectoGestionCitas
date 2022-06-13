import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { MedicoModule } from '../models/medico/medico.module';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private medicoList: AngularFireList<any>;
  selectedMedico: MedicoModule = new MedicoModule();

  constructor(
    private db: AngularFireDatabase
  ) {
    this.medicoList = db.list('/medico');
  }

  getMedicosList() {
    return this.medicoList = this.db.list('medico');
  }

  insertMedico(medico: MedicoModule) {
    this.medicoList.push({
      name: medico.name,
      lastname: medico.lastname,
      dni: medico.dni,
      phone: medico.phone,
      specialty: medico.specialty,
      state: medico.state,
    })
  }

  updateMedico(medico: MedicoModule) {
    this.medicoList.update(medico.key, {
      name: medico.name,
      lastname: medico.lastname,
      dni: medico.dni,
      phone: medico.phone,
      specialty: medico.specialty,
      state: medico.state,
    })
  }

  deleteMedico(key: string) {
    this.medicoList.remove(key);
  }
}
