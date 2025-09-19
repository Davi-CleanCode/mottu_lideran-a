import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inad } from './inad';

describe('Inad', () => {
  let component: Inad;
  let fixture: ComponentFixture<Inad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
