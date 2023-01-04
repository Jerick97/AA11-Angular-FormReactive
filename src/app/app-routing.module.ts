import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent}, //redireccionar al Home
  {path: '**', pathMatch:'full',redirectTo:'home'}//Cualquier url redirija al Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
