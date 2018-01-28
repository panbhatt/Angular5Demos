import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router' ;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private userName : string ; 
  

  constructor(private route : ActivatedRoute ) { 
     let selected:boolean = false; 
      route.params.subscribe(params => {
         this.userName = params["id"] ;
         selected = true ; 
      });

      if(!selected) {
        this.userName = "Default Username" ;
      }
  }

  ngOnInit() {
  }

}
