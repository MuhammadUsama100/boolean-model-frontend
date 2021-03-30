import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent implements OnInit {
  public query =""
  constructor(private formBuilder: FormBuilder , private router: Router) { }

  checkoutForm = this.formBuilder.group({
    query: '',
    

  });
  ngOnInit(): void {
  }
  onSubmit(data : any){
    console.log(data)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([ '/searched-list', data["query"].trim() ] );
  }
}
