import { Injectable, signal } from '@angular/core';

export interface MissionConfig {
  // Core
  hostIp: string;
  hasMoose: boolean;
  hasMist: boolean;
  
  // AI Commander
  aiModuleEnabled: boolean;
  authMethod: 'apikey' | 'vertex';
  apiKey: string;
  vertexPath: string;
  aiModel: string;
  intervalTime: number;
  commanderSide: 'both' | 'red' | 'blue';
  aggressivenessRed: number;
  aggressivenessBlue: number;
  enableEscalation: boolean;
  
  // Persistence & CSAR (se irán ampliando)
  persistenceEnabled: boolean;
  csarEnabled: boolean;

  civEnabled: boolean;
  qraEnabled: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MissionStateService {
  // Estado global reactivo inicializado con valores por defecto
  public config = signal<MissionConfig>({
    hostIp: '127.0.0.1',
    hasMoose: false,
    hasMist: false,
    
    aiModuleEnabled: true,
    authMethod: 'apikey',
    apiKey: '',
    vertexPath: '',
    aiModel: 'gemini-3.8-flash',        // TODO: model to use
    intervalTime: 300,
    commanderSide: 'both',
    aggressivenessRed: 33,
    aggressivenessBlue: 10,
    enableEscalation: true,
    
    persistenceEnabled: true,
    csarEnabled: true,
    civEnabled: true,
  qraEnabled: true
  });

  constructor() { }

  // Método para actualizar porciones del estado desde cualquier componente
  updateConfig(partialConfig: Partial<MissionConfig>) {
    this.config.update(current => ({ ...current, ...partialConfig }));
  }
}