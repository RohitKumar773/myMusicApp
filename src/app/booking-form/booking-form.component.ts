import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent {
  constructor(
    private route: Router,
    private snackbar: MatSnackBar
  ) {}

  submitButton(name: string, message: string, action: string) {
    this.snackbar.open(
      (message = 'Booking Request Sent Successfully'),
      (action = 'Close')
    );
this.route.navigate(['/homepage'])
  }
}
