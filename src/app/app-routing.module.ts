import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { LoginComponent } from './pages/login/login.component';
import { PlannerComponent } from './pages/planner/planner.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'planner',
    component: PlannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
