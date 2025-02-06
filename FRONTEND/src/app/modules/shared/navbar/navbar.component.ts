import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'shared-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  carritoCounter: number = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.carritoCounter$.subscribe((counter) => {
      this.carritoCounter = counter;
      console.log("Productos en carrito:", this.carritoCounter);
    });
  }


}

