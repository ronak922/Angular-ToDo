import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent implements OnInit {

  isDarkMode: boolean = false;

  ngOnInit(): void {
    // Initialize dark mode state from localStorage
    this.isDarkMode = this.getStoredTheme() === 'dark';
    this.applyTheme();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    this.storeTheme();
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  private storeTheme(): void {
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private getStoredTheme(): string | null {
    return localStorage.getItem('theme');
  }
}
