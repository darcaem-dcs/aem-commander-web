import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MissionStateService } from '../../../core/services/mission-state';

@Component({
  selector: 'app-civ-traffic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './civ-traffic.html',
  styleUrls: ['./civ-traffic.scss'] // Crea este archivo vacío con las clases de transición de opacidad
})
export class CivTraffic {
  constructor(public stateService: MissionStateService) {}
}