import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [ {  path : '', label : 'Home'   },
  {  path : 'about', label : 'About'   }, {  path : 'contact', label : 'Contact'   } , {  path : 'contact/pankaj', label : 'Contact Pankaj'   },
  {  path : 'contact/ram', label : 'Contact Ram'   }
] ;
}
