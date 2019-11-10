import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesResult } from '../dto/news';

@Injectable()
export class DataService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getValues(): Observable<string[]> {
        const url = `${this.baseUrl}/Values`;
        return this.http.get<string[]>(url);
    }

    public getTopHeadlines(): Observable<ArticlesResult> {
        const url = `${this.baseUrl}/News/TopHeadlines`;
        return this.http.get<ArticlesResult>(url);
    }
}
