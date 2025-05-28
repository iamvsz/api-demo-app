import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataViewerComponent } from './components/data-viewer/data-viewer.component';

@Component({
  selector: 'app-root',
  imports: [ DataViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-demo-app';
}
