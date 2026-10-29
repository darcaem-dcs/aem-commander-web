// src/app/features/config/ai-commander/ai-commander.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MissionStateService } from '../../../core/services/mission-state';

@Component({
  selector: 'app-ai-commander',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-commander.html',
  styleUrls: ['./ai-commander.scss']
})
export class AiCommander {
  
  constructor(public stateService: MissionStateService) {}

  onAiToggle(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.stateService.updateConfig({ aiModuleEnabled: checkbox.checked });
  }

  onAuthMethodChange(method: 'apikey' | 'vertex') {
    this.stateService.updateConfig({ authMethod: method });
  }

  onApiKeyChange(value: string) {
    this.stateService.updateConfig({ apiKey: value });
  }

  onModelChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.stateService.updateConfig({ aiModel: select.value });
  }

  onIntervalChange(value: number) {
    this.stateService.updateConfig({ intervalTime: value });
  }

  onAggressivenessChange(side: 'red' | 'blue', value: number) {
    if (side === 'red') {
      this.stateService.updateConfig({ aggressivenessRed: value });
    } else {
      this.stateService.updateConfig({ aggressivenessBlue: value });
    }
  }

  onEscalationToggle(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.stateService.updateConfig({ enableEscalation: checkbox.checked });
  }
}