import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreSetup } from './core-setup';

describe('CoreSetup', () => {
  let component: CoreSetup;
  let fixture: ComponentFixture<CoreSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSetup],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreSetup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
