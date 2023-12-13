import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContainerOneComponent } from './all-container-one.component';

describe('AllContainerOneComponent', () => {
  let component: AllContainerOneComponent;
  let fixture: ComponentFixture<AllContainerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllContainerOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllContainerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
