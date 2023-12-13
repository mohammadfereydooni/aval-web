import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseOptionComponent } from './chose-option.component';

describe('ChoseOptionComponent', () => {
  let component: ChoseOptionComponent;
  let fixture: ComponentFixture<ChoseOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoseOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
