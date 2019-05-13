import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {  ToastrModule } from 'ngx-toastr';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { OrderComponent } from './order/order.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AddresourcesComponent } from './addresources/addresources.component';
import { AddprojectsComponent } from './addprojects/addprojects.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';
import { RegisterComponent } from './pages/register/register.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { WorkerComponent } from './worker/worker.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot({      // Register NgxToast NPM module
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    OrderComponent,
    LoginComponent,
    HomepageComponent,
    NavigationBarComponent,
  RegisterComponent,
  WorkerComponent,




  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
