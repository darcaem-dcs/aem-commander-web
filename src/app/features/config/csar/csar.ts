import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MissionStateService } from '../../../core/services/mission-state';

@Component({
  selector: 'app-csar',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Importaciones clave
  templateUrl: './csar.html',           // <-- Asegúrate de referenciar el HTML
  styleUrls: ['./csar.scss']            // <-- Crea un csar.scss vacío si no existe
})
export class Csar {
  constructor(public stateService: MissionStateService) {}
}