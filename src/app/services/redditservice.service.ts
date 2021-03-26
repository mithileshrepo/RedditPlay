import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditserviceService {
  URL : string  = "https://www.reddit.com/subreddits/popular.json";

  constructor(private http : HttpClient) { }

  getRedditData(){
    return this.http.get(this.URL);
  }
}
