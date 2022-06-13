import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UserModule } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: AngularFireList<any>;
  selectedUser: UserModule = new UserModule();

  public newProfile$ = new EventEmitter<UserModule>();

  constructor(
    private db: AngularFireDatabase,
    private afauth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userList = db.list('/user');
  }

  async register(user: UserModule) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(user.email, user.password).then(res => {
        this.userList.push({
          //...user
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          dni: user.dni,
          phone: user.phone,
          address: user.address,
          rank: "client",
          state: true
        })
      });
    }
    catch (err) {
      console.log("error en register: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Registrarse');
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    }
    catch (err) {
      console.log("error en login: ", err);
      this.toastr.error('Compruebe que todo este correcto', 'Error al Iniciar Sesión');
      return null;
    }
  }

  updateUser(user: UserModule) {
    this.userList.update(user.key, {
      name: user.name,
      lastname: user.lastname,
      dni: user.dni,
      email: user.email,
      phone: user.phone,
      address: user.address,
    })
  }

  getUserLogged() {
    return this.afauth.authState;
  }

  getUserList() {
    return this.userList = this.db.list('user');
  }

  logout() {
    try {
      localStorage.clear();
      this.afauth.signOut();
    } catch (err) {
      console.log(err);
    }
  }
}
