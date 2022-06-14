import {
  Directive, EventEmitter, ElementRef,
  HostListener, Input, Output
} from '@angular/core';

import { FileItemModule } from '../models/file-item.module';

@Directive({
  selector: '[appNgDropImages]'
})
export class NgDropImagesDirective {

  @Input() files: FileItemModule[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);

    //TODO: Validar el formato del archivo
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    const transferencia = this._getTransferencia(event);
    if (!transferencia) { return; }
    this._extraerFiles(transferencia.files);
    this._prevenirDetener(event);
    this.mouseSobre.emit(false);

  }

  private _getTransferencia(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extraerFiles(filesList: FileList) {
    //console.log(filesList);
    for (const property in Object.getOwnPropertyNames(filesList)) {
      const tempFile = filesList[property];
      if (this._fileAccepted(tempFile)) {
        const newFile = new FileItemModule(tempFile);
        this.files.push(newFile);
      }
    }
    //console.log(this.files);
  }

  //Validaciones
  private _fileAccepted(file: File): boolean {
    if (!this._archivoDropeado(file.name) && this._extensionAceptada(file.type)) {
      return true;
    }
    return false;
  }

  private _prevenirDetener(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoDropeado(fileName: string): boolean {
    for (const file of this.files) {
      if (file.fileName == fileName) {
        console.log('El archivo ' + fileName + ' yasta');
        return true;
      }
    }
    return false;
  }

  private _extensionAceptada(tipoFile: string): boolean {
    return (tipoFile === '' || tipoFile === undefined) ? false : tipoFile.startsWith('image'); //TODO: Cambiar las extensiones necesarias
  }
}
