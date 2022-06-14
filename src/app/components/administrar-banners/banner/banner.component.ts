import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BannerModule } from 'src/app/models/banner.module';
import { FileItemModule } from 'src/app/models/file-item.module';
import { BannerService } from 'src/app/services/banner.service';
import { FireStorageService } from 'src/app/services/fire-storage.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  dropElement: boolean = false;
  files: FileItemModule[] = [];
  public formParent: FormGroup = new FormGroup({});

  constructor(
    private bannerService: BannerService,
    private fireStorage: FireStorageService
  ) { }

  ngOnInit(): void {
    this.initFormParent();
  }

  initFormParent(): void {
    this.formParent = new FormGroup({
      banners: new FormArray([]),
    });
  }

  initFormBanner(): FormGroup {
    return new FormGroup({
      titulo: new FormControl(''),
      subtitulo: new FormControl('',),
      descripcion: new FormControl('',),
    });
  }

  addFormBanner(): void {
    if (this.files.length == 0) { return; }
    const refBanners = this.formParent.get('banners') as FormArray;
    if (this.files.length > refBanners.length) {
      for (let index = 0; index < this.files.length; index++) {
        refBanners.push(this.initFormBanner());
      }
    }
  }

  //este funcion aun no se usara pero lo dejo por las dudas
  getCtrl(i: number): { [key: string]: AbstractControl; } {
    const form = this.formParent.get('banners') as FormArray;
    return (form.at(i) as FormGroup).controls;
  }

  async uploadThis(i: number) {
    const bannerForm = (this.formParent.get('banners') as FormArray).at(i);
    if (bannerForm.invalid) {
      return;
    }
    await this.fireStorage.uploadFileFirebase(this.files[i]).then(url => {
      const banner = bannerForm.value as BannerModule;
      banner.imageurl = url as string;
      banner.imagenombre = this.files[i].fileName;
      this.bannerService.insertBanner(banner);
      this.removeThis(i);
    });
  }

  removeThis(i: number) {
    this.files.splice(i, 1);
    (this.formParent.get('banners') as FormArray).removeAt(i);
  }
}
