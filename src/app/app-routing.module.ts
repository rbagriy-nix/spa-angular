import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from "./components/todo/todo.component";
import { HomeComponent } from "./components/home/home.component";
import {ShopComponent} from "./components/shop/shop.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'todo', component: TodoComponent },
  { path: 'shop', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
