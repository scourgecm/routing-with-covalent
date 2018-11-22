import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion/administracion.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [AdministracionComponent],
  imports: [CommonModule, LayoutModule, AdministracionRoutingModule],
})
export class AdministracionModule {}
