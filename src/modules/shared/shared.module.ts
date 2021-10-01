import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule


  ],
  exports: [
    TranslateModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class SharedModule { }
