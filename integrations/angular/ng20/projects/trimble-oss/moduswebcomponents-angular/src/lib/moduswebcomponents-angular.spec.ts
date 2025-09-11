import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuswebcomponentsAngular } from './moduswebcomponents-angular';

describe('ModuswebcomponentsAngular', () => {
  let component: ModuswebcomponentsAngular;
  let fixture: ComponentFixture<ModuswebcomponentsAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuswebcomponentsAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuswebcomponentsAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
