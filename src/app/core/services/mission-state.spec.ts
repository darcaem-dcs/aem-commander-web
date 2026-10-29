import { TestBed } from '@angular/core/testing';
import { MissionState } from './mission-state';

describe('MissionState', () => {
  let service: MissionState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
