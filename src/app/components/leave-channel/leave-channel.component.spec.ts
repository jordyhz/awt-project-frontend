import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveChannelComponent } from './leave-channel.component';

describe('LeaveChannelComponent', () => {
  let component: LeaveChannelComponent;
  let fixture: ComponentFixture<LeaveChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
