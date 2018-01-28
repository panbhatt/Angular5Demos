import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyaddComponent } from './partyadd.component';

describe('PartyaddComponent', () => {
  let component: PartyaddComponent;
  let fixture: ComponentFixture<PartyaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
