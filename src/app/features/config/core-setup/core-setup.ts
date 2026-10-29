// src/app/features/config/core-setup/core-setup.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MissionStateService } from '../../../core/services/mission-state';

@Component({
  selector: 'app-core-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './core-setup.html',
  styleUrls: ['./core-setup.scss']
})
export class CoreSetup {
  
  constructor(public stateService: MissionStateService) {}

  // Métodos que se disparan desde el HTML cuando el usuario cambia algo
  onHostIpChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.stateService.updateConfig({ hostIp: select.value });
  }

  onMooseChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.stateService.updateConfig({ hasMoose: checkbox.checked });
  }

  onMistChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.stateService.updateConfig({ hasMist: checkbox.checked });
  }
}