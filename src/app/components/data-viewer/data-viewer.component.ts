import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-viewer',
  imports: [CommonModule,FormsModule],
  templateUrl: './data-viewer.component.html',
  styleUrl: './data-viewer.component.css'
})
export class DataViewerComponent {
  posts: any[] = [];
  loading = true;
  error = '';

  newPost = {
    title: '',
    body: '',
    userId: 1
  };

  constructor(private dataService: DataService) { }

   ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error fetching data';
        this.loading = false;
      }
    });
  }

  addPost() {
    this.dataService.postData(this.newPost).subscribe({
      next: (data) => {
        this.posts.unshift(data); 
        console.log(data)// Add new post at top
        this.newPost.title = '';
        this.newPost.body = '';
      },
      error: () => {
        this.error = 'Error posting data';
      }
    });
  }
}
