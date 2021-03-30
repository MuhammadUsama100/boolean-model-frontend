import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultViewComponent } from './result-view/result-view.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { SearchedListComponent } from './searched-list/searched-list.component';

const routes: Routes = [
  { path: "", redirectTo: "search-component", pathMatch: "full", },
  { path: 'search-component', component: SearchScreenComponent , runGuardsAndResolvers: "always"},
  { path: 'searched-list/:query', component: SearchedListComponent , runGuardsAndResolvers: "always", },
  { path: 'result-view/:data', component: ResultViewComponent  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes , {onSameUrlNavigation: "reload"}) , ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
