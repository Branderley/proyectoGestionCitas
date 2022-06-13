import { Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { LoginComponent } from './components/administrar-login/login/login.component';
import { SignUpComponent } from './components/administrar-login/sign-up/sign-up.component';
import { HomeComponent } from './shared/home/home.component';
import { AdministrarLoginComponent } from './components/administrar-login/administrar-login.component';
import { AdministrarHistorialComponent } from './components/administrar-historial/administrar-historial.component';
import { AdministrarMedicosComponent } from './components/administrar-medicos/administrar-medicos.component';
import { AdministrarCitasComponent } from './components/administrar-citas/administrar-citas.component';

const redirecUnauthorizesToLogin = () => redirectUnauthorizedTo(['login']);

export const ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirecUnauthorizesToLogin } },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirecUnauthorizesToLogin } },
  { path: 'administrar-user', component: AdministrarLoginComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirecUnauthorizesToLogin } },
  { path: 'administrar-citas', component: AdministrarCitasComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirecUnauthorizesToLogin } },
  { path: 'administrar-historial', component: AdministrarHistorialComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirecUnauthorizesToLogin } },
  { path: 'administrar-medicos', component: AdministrarMedicosComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirecUnauthorizesToLogin } },

  { path: '**', pathMatch: 'full', redirectTo: '' }
];
