import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  constructor(
    private snackbar: MatSnackBar, 
    private route: Router
  ) 
    {}

  submitForm(message:string, action:string) {
    this.route.navigate(['/homepage']);
    this.snackbar.open(message = "Message Sent Successfully", action = "Close")
  }
}
