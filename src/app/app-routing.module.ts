import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { LinkComponent } from './MyComponent/link/link.component';
import { HomeComponent } from './home/home.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent },
  {path: 'dark-mode-toggle', component: DarkModeToggleComponent },
  {path: 'link', component: LinkComponent },
  {path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
