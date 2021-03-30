import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss']
})
export class SearchedListComponent implements OnInit {
  public items :any[] = []
  public query : any 
  public resultDoc = "" 
  public  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private route: ActivatedRoute,
   private http: HttpClient , private formBuilder: FormBuilder , private router: Router) { }

   
  checkoutForm = this.formBuilder.group({
    query: '',
  });
  ngOnInit(): void {
    this.query  =  this.route.snapshot.paramMap.get("query");
    console.log(this.query)
    
    this.http.post<Result>("https://boolean-retrieval.herokuapp.com/process-query" , {"query":  this.query} , {headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })}).subscribe(data => {
     let list = data.resultset
     this.resultDoc  = String(list )
      for (let i in list){
        console.log(list[i])
        this.http.get(`assets/ShortStories/${list[i]}.txt` ,  {responseType: 'text'}).subscribe(data => {
          this.items.push( {header :  data.split("\n")[0]   , body: data.trim().substring(0,500).trim(), location: `${list[i]}` })
      })
      }
  })
    
   
  }
  onSubmit(data : any){
    console.log(data)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate ( [ '/searched-list', data["query"].trim() ]);
  }
  open(data: any ){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate ( [ '/result-view', data ]);
  }
}

class Result {
  public resultset : any 
}