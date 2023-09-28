import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EratetypesComponent } from './eratetypes.component';

describe('EratetypesComponent', () => {
  let component: EratetypesComponent;
  let fixture: ComponentFixture<EratetypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EratetypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EratetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
