import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {path: 'technology', component:TechnologyComponent},
  {path: 'booklist', component: BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
