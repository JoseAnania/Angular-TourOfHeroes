/* Servicio para manejar la info de los Mensajes */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  // creamos la propiedad
  messages: string[] = [];

  // método para agregar mensaje
  add(message: string) {
    this.messages.push(message);
  }

  // método para limpiar el mensaje
  clear() {
    this.messages = [];
  }
}
