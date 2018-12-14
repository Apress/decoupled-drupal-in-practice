// src/app/articles/articles.component.ts
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'

export class Article {
  attributes: object;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})

export class ArticlesComponent implements OnInit {
  title = 'ddip-ng';
  articles: Article[];
  selectedArticle: Article;

  constructor(private articleService: ArticleService) { }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  ngOnInit(): void {
    this.getArticles();
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }
}
