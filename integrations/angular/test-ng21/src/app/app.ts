import { Component } from '@angular/core';
import { ModusWcButton, ModusWcLogo } from '@trimble-oss/moduswebcomponents-angular';

@Component({
  selector: 'app-root',
  imports: [ModusWcButton, ModusWcLogo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'test-ng21';
}
