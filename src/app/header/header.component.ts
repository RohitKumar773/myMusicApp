import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  

  constructor(
    private dialog: MatDialog,
  )
  {}
  
  openBookingForm(){
    this.dialog.open(BookingFormComponent, {
      disableClose:true
    })
  }

}
