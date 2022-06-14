import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FileItemModule {
  public file: File;
  public fileName: string;
  public url: string | null;
  public uploading: boolean;
  public progress: number;

  constructor(file: File) {
    this.file = file;
    this.fileName = file.name;

    this.uploading = false;
    this.progress = 0;
  }
}
