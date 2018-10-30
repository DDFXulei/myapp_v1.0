import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarComponent } from './usedcar.component';

describe('UsedcarComponent', () => {
  let component: UsedcarComponent;
  let fixture: ComponentFixture<UsedcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
