import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ArticlesResult, Article } from '../dto/news';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(
        public dataService: DataService
    ) {
        dataService.getTopHeadlines().subscribe(resp => {
            this.articles = resp.articles;
            console.log('this.articles = ', this.articles);
            this.processArticles();
        });
    }

    public articles: Article[];

    ngOnInit(): void {

    }

    processArticles() {

    }
}
