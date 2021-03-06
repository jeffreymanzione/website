import { NgModule } from "@angular/core";
import { ApisComponent } from "./apis.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ApisServiceModule } from "src/service/apis/apis.module";
import { CommonModule } from "@angular/common";
import { ApiCardComponent } from "./api-card.component";

@NgModule({
  declarations: [ApisComponent, ApiCardComponent],
  exports: [ApisComponent, ApiCardComponent],
  imports: [
    ApisServiceModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class ApisModule { }