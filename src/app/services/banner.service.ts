import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';

import { BannerModule } from '../models/banner.module';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private bannerList: AngularFireList<BannerModule>;

  constructor(
    private readonly db: AngularFireDatabase,
    private toastr: ToastrService,
  ) {
    this.bannerList = db.list('/banner');
  }

  getBannerList(): AngularFireList<BannerModule> {
    return this.bannerList = this.db.list('/banner');
  }

  insertBanner(banner: BannerModule) {
    try {
      this.bannerList.push(banner);
      this.toastr.success('Operación realizada con exito', 'Banner Ingresado con exito');
    }
    catch (err) {
      console.log("error al insertar un Banner: ", err);
      this.toastr.error("Compruebe que todo este correcto", "Error al Insertar un Banner");
      return null;
    }
  }

  updateBanner(banner: BannerModule) {
    try {
      this.bannerList.update(banner.key, banner);
      this.toastr.success('Operación realizada con exito', 'Banner Actualizado con exito');
    }
    catch (err) {
      console.log("error al actualizar un Banner: ", err);
      this.toastr.error("Compruebe que todo este correcto", "Error al Actualizar un Banner");
      return null;
    }
  }

  deleteBanner(key: string) {
    try {
      this.bannerList.remove(key);
      this.toastr.success('Operación realizada con exito', 'Banner Eliminado con exito');
    }
    catch (err) {
      console.log("error al eliminar un Banner: ", err);
      this.toastr.error("Compruebe que todo este correcto", "Error al Eliminar un Banner");
      return null;
    }
  }
}
