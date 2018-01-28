import { Component, OnInit } from '@angular/core';
import UserService from './../services/user-service.service' ;

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  private loading:boolean = true ; 
  private postsData:any  ; 

  constructor(private userService : UserService) { }

  ngOnInit() {

    // Make an Http Call. 
     this.userService.getLoginUserDetails().subscribe((res : Response) => {
        console.log("User Data = "+ JSON.stringify(res) ); 
        this.postsData = res ; 
        this.postsData.length = 3 ;   // To Show only two elements on the web page. 
        this.loading = false ; 
      }
    ) ;
    
  }

}
