import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingsModalComponent} from './bookings-modal.component';

describe('BookingsModalComponent', () => {
  let component: BookingsModalComponent;
  let fixture: ComponentFixture<BookingsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
