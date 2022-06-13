import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  key: string;
  name: string;
  lastname: string;
  email: string;
  dni: string;
  phone: string;
  address: string;
  rank: string;
  state: boolean;
  password: string;
}
