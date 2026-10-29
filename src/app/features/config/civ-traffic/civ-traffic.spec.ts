import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CivTraffic } from './civ-traffic';

describe('CivTraffic', () => {
  let component: CivTraffic;
  let fixture: ComponentFixture<CivTraffic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivTraffic],
    }).compileComponents();

    fixture = TestBed.createComponent(CivTraffic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
