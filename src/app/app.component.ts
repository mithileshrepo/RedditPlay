import { RedditserviceService } from './services/redditservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  redditData:any;

  constructor(private redditService : RedditserviceService){}
  ngOnInit(){
    
    this.redditService.getRedditData().subscribe(resp => {
   
      this.redditData = resp['data'].children;
    })
  }

  navigateTo(val){
  

     window.location.href = "www.reddit.com/"+val.data.url
  
      //window.open("www.reddit.com/"+val.data.display_name_prefixed,"_blank")
  }
  }
   


