import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Qra } from './qra';

describe('Qra', () => {
  let component: Qra;
  let fixture: ComponentFixture<Qra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qra],
    }).compileComponents();

    fixture = TestBed.createComponent(Qra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
