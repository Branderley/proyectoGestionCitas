import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MedicoModule {
  key: string;
  name: string;
  lastname: string;
  dni: string;
  phone: string;
  specialty: string;
  state: boolean;
}
