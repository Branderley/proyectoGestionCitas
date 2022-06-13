import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

//firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';

//Components
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdministrarLoginComponent } from './components/administrar-login/administrar-login.component';
import { LoginComponent } from './components/administrar-login/login/login.component';
import { SignUpComponent } from './components/administrar-login/sign-up/sign-up.component';
import { UserComponent } from './components/administrar-login/user/user.component';
import { AdministrarMedicosComponent } from './components/administrar-medicos/administrar-medicos.component';
import { MedicoComponent } from './components/administrar-medicos/medico/medico.component';
import { AdministrarHistorialComponent } from './components/administrar-historial/administrar-historial.component';
import { ListarMedicosComponent } from './components/administrar-medicos/listar-medicos/listar-medicos.component';
import { AdministrarCitasComponent } from './components/administrar-citas/administrar-citas.component';
import { CitaComponent } from './components/administrar-citas/cita/cita.component';
import { ListarCitasComponent } from './components/administrar-citas/listar-citas/listar-citas.component';
import { HoraComponent } from './components/administrar-citas/hora/hora.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdministrarLoginComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    AdministrarMedicosComponent,
    MedicoComponent,
    AdministrarHistorialComponent,
    ListarMedicosComponent,
    AdministrarCitasComponent,
    CitaComponent,
    ListarCitasComponent,
    HoraComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    SwiperModule,
    ToastrModule.forRoot(),

    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
