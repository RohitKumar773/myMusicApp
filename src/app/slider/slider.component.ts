import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  constructor(private dialog: MatDialog) {}

  openBookingForm() {
    this.dialog.open(BookingFormComponent, {
      disableClose: true,
    });
  }
}
