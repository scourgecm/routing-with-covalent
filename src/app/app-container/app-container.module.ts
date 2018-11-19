import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatListModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core/layout';

import { AppContainerRoutingModule } from './app-container-routing.module';
import { AppContainerComponent } from './app-container/app-container.component';

const ANGULAR_MODULES = [MatListModule, MatIconModule, MatButtonModule];
const COVALENT_MODULES = [CovalentLayoutModule];

@NgModule({
  declarations: [AppContainerComponent],
  imports: [
    CommonModule,
    AppContainerRoutingModule,
    ANGULAR_MODULES,
    COVALENT_MODULES,
  ],
})
export class AppContainerModule {}
