import { Component } from '@angular/core';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.css']
})
export class FloatingComponent {

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}

