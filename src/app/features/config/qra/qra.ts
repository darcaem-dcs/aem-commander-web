import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MissionStateService } from '../../../core/services/mission-state';

@Component({
  selector: 'app-qra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qra.html',
  styleUrls: ['./qra.scss'] // Crea este archivo vacío
})
export class Qra {
  constructor(public stateService: MissionStateService) {}
}