import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiCommander } from './ai-commander';

describe('AiCommander', () => {
  let component: AiCommander;
  let fixture: ComponentFixture<AiCommander>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCommander],
    }).compileComponents();

    fixture = TestBed.createComponent(AiCommander);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
