import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/reponse.interface'
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = `${environment.apiBaseUrl}/umbraco/delivery/api/v2/content?filter=contentType:blogPost`;

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}

