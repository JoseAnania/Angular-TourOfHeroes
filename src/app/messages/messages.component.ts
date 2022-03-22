/* muestra los mensajes de la aplicación en la parte inferior de la pantalla */

import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // inyectamos el servicio
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
