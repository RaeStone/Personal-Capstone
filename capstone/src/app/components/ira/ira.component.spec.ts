import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRAComponent } from './ira.component';

describe('IRAComponent', () => {
  let component: IRAComponent;
  let fixture: ComponentFixture<IRAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IRAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
