import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageCourceComponent } from './components/page-cource/page-cource.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'prefix'},
  {path: 'main', component: MainComponent},
  {path: 'cource', component: PageCourceComponent},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
