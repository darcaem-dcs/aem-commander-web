import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Csar } from './csar';

describe('Csar', () => {
  let component: Csar;
  let fixture: ComponentFixture<Csar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csar],
    }).compileComponents();

    fixture = TestBed.createComponent(Csar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
