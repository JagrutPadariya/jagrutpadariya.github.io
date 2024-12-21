import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { animation } from '@angular/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ProfileComponent,
    data: { title: 'Home', titleI18n: 'Home', animation: 'Home' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About', titleI18n: 'About', animation: 'About' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
