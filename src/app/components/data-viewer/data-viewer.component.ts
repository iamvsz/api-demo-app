import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-viewer',
  imports: [CommonModule],
  templateUrl: './data-viewer.component.html',
  styleUrl: './data-viewer.component.css'
})
export class DataViewerComponent {
  posts: any[] = [];
  loading = true;
  error = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (data) => {
        console.log(data)
        this.posts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error fetching data';
        this.loading = false;
      }
    });
  }
}
