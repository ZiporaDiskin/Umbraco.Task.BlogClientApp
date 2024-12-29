import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from 'src/app/models/blog-post.interface';
import { ApiResponse } from 'src/app/models/reponse.interface';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogPosts().subscribe({
      next: (res:ApiResponse) => {
        this.blogPosts = res.items;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load blog posts.';
        this.isLoading = false;
      },
    });
  }
}
