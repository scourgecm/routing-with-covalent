import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion/administracion.component';

@NgModule({
  declarations: [AdministracionComponent],
  imports: [
    CommonModule,
    CovalentLayoutModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    AdministracionRoutingModule,
  ],
})
export class AdministracionModule {}
