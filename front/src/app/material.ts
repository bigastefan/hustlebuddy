import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonToggleModule, MatTreeModule, MatDividerModule, MatCardModule, MatListModule, MatStepperModule, MatAutocompleteModule, MatExpansionModule, MatDatepickerModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        DragDropModule,
        MatTabsModule,
        MatBadgeModule,
        MatIconModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonToggleModule,
        MatTreeModule,
        MatMomentDateModule,
        MatDividerModule,
        MatCardModule,
        MatSnackBarModule,
        MatListModule,
        MatTabsModule,
        MatInputModule,
        DragDropModule,
        MatStepperModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        DragDropModule,
        MatTabsModule,
        MatBadgeModule,
        MatIconModule,
        MatGridListModule
    ],
  })
  export class Material { }