import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BookListComponent } from './book-list/book-list.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: 'technology', component:TechnologyComponent},
  {path: 'booklist', component: BookListComponent},
  {path:'',component: TechnologyComponent},
  {path:'**',component: NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
