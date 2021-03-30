import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {
  public data = ""
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }
  public fileName : any 
  ngOnInit(): void {
    this.fileName  =  this.route.snapshot.paramMap.get("data");
    this.http.get(`assets/ShortStories/${this.fileName}.txt` ,  {responseType: 'text'}).subscribe(data => {
      this.data =  data
  })
  }

}
