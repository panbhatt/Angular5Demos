import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyInfoComponent } from './party-info.component';

describe('PartyInfoComponent', () => {
  let component: PartyInfoComponent;
  let fixture: ComponentFixture<PartyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
