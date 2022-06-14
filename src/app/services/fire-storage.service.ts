import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { FileItemModule } from '../models/file-item.module';
import "firebase/compat/storage";
import { getStorage, ref, deleteObject } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  private CARPETA_ARCHIVOS = 'img';

  constructor() { }

  async uploadFileFirebase(file: FileItemModule): Promise<String> {
    return new Promise((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.CARPETA_ARCHIVOS}/${file.fileName}`)
        .put(file.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => { file.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 },
        (error) => { console.error('Error al subir -> ', error); reject() },
        async () => {
          resolve(uploadTask.snapshot.ref.getDownloadURL());
        });
    })
  }

  deleteFile(img: string) {
    const storage = getStorage();
    const desertRef = ref(storage, `${this.CARPETA_ARCHIVOS}/${img}`);
    deleteObject(desertRef).then(() => {
      // File deleted successfully
    });
  }
}
