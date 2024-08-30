import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  constructor(private router: Router) {}

  getStarted() {
    // Navigate to another page (e.g., home page or main app)
    this.router.navigate(['/home']);
  }
}
