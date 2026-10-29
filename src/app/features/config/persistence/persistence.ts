import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MissionStateService } from '../../../core/services/mission-state';

@Component({
  selector: 'app-persistence',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persistence.html',
  styleUrls: ['./persistence.scss'] // Crea este archivo vacío
})
export class Persistence {
  constructor(public stateService: MissionStateService) {}
}