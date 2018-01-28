import { Component, OnInit , HostBinding, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  
  @Input() title : string;
  @Input() desc : string;
  @Output() onArticleClicked : EventEmitter<string> ; 
  votes : number;

  constructor() {
    this.votes = 10 ; 
    this.title = "";
    this.desc = "";
    this.onArticleClicked = new EventEmitter() ;
   }

  ngOnInit() {
  }

  voteUp(){
    this.votes++;
    return false; 
   }

  voteDown() { 
    this.votes--;
    return false; 
  }

  handleClick(){
    this.onArticleClicked.emit(this.title) ;
  }

}
