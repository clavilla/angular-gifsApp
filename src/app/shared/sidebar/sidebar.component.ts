import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }

  //La inyeccion de servicio se hace en el constructor
  constructor( private gifsService: GifsService ) { }

  buscar( termino: string ){
    this.gifsService.buscarGifs( termino );
  }


}
