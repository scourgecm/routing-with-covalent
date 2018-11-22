import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavContainerComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [SidenavContainerComponent],
})
export class LayoutModule {}
