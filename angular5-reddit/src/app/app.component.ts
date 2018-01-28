import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  articles:any[];
  currentArticle : any ; 

  constructor(){
    this.articles = [] ;
    this.currentArticle = undefined; 
  }

  onArticleSelect(nameofArticle:string) {
    console.log(nameofArticle + " is being clicked");
  }

  addArticle(title : HTMLInputElement , desc : HTMLInputElement) {
    console.log("I M getting called. ", title.value + " Desc = " + desc.value) ;
    this.articles.push( {
      title : title.value,
      desc : desc.value 
    });
    return false; 
  }



}
