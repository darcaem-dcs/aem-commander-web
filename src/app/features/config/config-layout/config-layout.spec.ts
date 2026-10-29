import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigLayout } from './config-layout';

describe('ConfigLayout', () => {
  let component: ConfigLayout;
  let fixture: ComponentFixture<ConfigLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
