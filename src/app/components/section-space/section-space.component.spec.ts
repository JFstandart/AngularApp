import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpaceComponent } from './section-space.component';

describe('SectionSpaceComponent', () => {
  let component: SectionSpaceComponent;
  let fixture: ComponentFixture<SectionSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
