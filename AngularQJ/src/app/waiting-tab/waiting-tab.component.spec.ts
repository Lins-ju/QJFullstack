import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingTabComponent } from './waiting-tab.component';

describe('WaitingTabComponent', () => {
  let component: WaitingTabComponent;
  let fixture: ComponentFixture<WaitingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaitingTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
