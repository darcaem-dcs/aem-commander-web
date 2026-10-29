import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MissionStateService } from '../../../core/services/mission-state';
import { ThemeService } from '../../../core/services/theme'; // <-- Inyectar

@Component({
  selector: 'app-config-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './config-layout.html',
  styleUrls: ['./config-layout.scss']
})
export class ConfigLayout {
  constructor(
    private stateService: MissionStateService,
    public themeService: ThemeService // <-- Añadir al constructor
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);
      console.log('Configuración lista para enviar:', this.stateService.config());
      
      // Aquí conectaremos con Cloud Run en el siguiente paso
      // this.cloudRunService.uploadAndInject(file, this.stateService.config());
    }
  }
}