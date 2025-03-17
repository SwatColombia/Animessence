import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [MatMenuModule, MatButtonModule, CommonModule],
  exports: [NavbarComponent,FooterComponent],
})
export class SharedModule {}
