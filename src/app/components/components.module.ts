import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from 'app/services/auth/auth.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { MaterialModule } from 'app/material.module';
import { ProveedoresService } from 'app/services/proveedores/proveedores.service';
import { UserService } from 'app/services/user/user.service';
import { NotificationsService } from 'app/services/notifications/notifications.service';
import { ProveedoresDialogoComponent } from './proveedores-dialogo/proveedores-dialogo.component';
import { DialogosService } from 'app/services/dialogos/dialogos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertenciaDialogoComponent } from './advertencia-dialogo/advertencia-dialogo.component';
import { TipoMaterialComponent } from './tipo-material/tipo-material.component';
import { TipoMaterialDialogoComponent } from './tipo-material-dialogo/tipo-material-dialogo.component';
import { MaterialesService } from 'app/services/materiales/materiales.service';
import { MaterialesComponent } from './materiales/materiales.component';
import { MaterialesDialogoComponent } from './materiales-dialogo/materiales-dialogo.component';
import { TiendasTableComponent } from './tiendas/tiendas.component';
import { TiendasDialogoComponent } from './tiendas-dialogo/tiendas-dialogo.component';
import { MaterialTiendaComponent } from './material-tienda/material-tienda.component';
import { MaterialTiendaDialogoComponent } from './material-tienda-dialogo/material-tienda-dialogo.component';
import { MonedasService } from 'app/services/monedas/monedas.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosDialogoComponent } from './usuarios-dialogo/usuarios-dialogo.component';
import { TipoUsuariosComponent } from './tipo-usuarios/tipo-usuarios.component';
import { TipoUsuariosDialogoComponent } from './tipo-usuarios-dialogo/tipo-usuarios-dialogo.component';
import { EstadosComponent } from './estados/estados.component';
import { EstadosDialogoComponent } from './estados-dialogo/estados-dialogo.component';
import { EstadosService } from 'app/services/estados/estados.service';
import { MonedasComponent } from './monedas/monedas.component';
import { MonedasDialogoComponent } from './monedas-dialogo/monedas-dialogo.component';
import { ArrendamientosComponent } from './arrendamientos/arrendamientos.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MaterialesTiendaBuscadorComponent } from './materiales-tienda-buscador/materiales-tienda-buscador.component';
import { ArrendamientosService } from 'app/services/arrendamientos/arrendamientos.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ProveedoresComponent,
    ProveedoresDialogoComponent,
    AdvertenciaDialogoComponent,
    TipoMaterialComponent,
    TipoMaterialDialogoComponent,
    MaterialesComponent,
    MaterialesDialogoComponent,
    TiendasTableComponent,
    TiendasDialogoComponent,
    MaterialTiendaComponent,
    MaterialTiendaDialogoComponent,
    UsuariosComponent,
    UsuariosDialogoComponent,
    TipoUsuariosComponent,
    TipoUsuariosDialogoComponent,
    EstadosComponent,
    EstadosDialogoComponent,
    MonedasComponent,
    MonedasDialogoComponent,
    ArrendamientosComponent,
    MaterialesTiendaBuscadorComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ProveedoresComponent,
    ProveedoresDialogoComponent,
    AdvertenciaDialogoComponent,
    TipoMaterialComponent,
    TipoMaterialDialogoComponent,
    MaterialesComponent,
    MaterialesDialogoComponent,
    TiendasTableComponent,
    TiendasDialogoComponent,
    MaterialTiendaComponent,
    MaterialTiendaDialogoComponent,
    UsuariosComponent,
    UsuariosDialogoComponent,
    TipoUsuariosComponent,
    TipoUsuariosDialogoComponent,
    EstadosComponent,
    EstadosDialogoComponent,
    MonedasComponent,
    MonedasDialogoComponent,
    ArrendamientosComponent,
    MaterialesTiendaBuscadorComponent,
  ],
  providers: [
    AuthService,
    ProveedoresService,
    UserService,
    NotificationsService,
    DialogosService,
    MaterialesService,
    MonedasService,
    EstadosService,
    ArrendamientosService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ],
})
export class ComponentsModule { }
