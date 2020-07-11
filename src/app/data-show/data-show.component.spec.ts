import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShowComponent } from './data-show.component';

describe('DataShowComponent', () => {
  let component: DataShowComponent;
  let fixture: ComponentFixture<DataShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
