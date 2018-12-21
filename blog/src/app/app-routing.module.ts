import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './components/quiz/quiz.component';
import {BlogItemDetailComponent} from './components/blog-item-detail/blog-item-detail.component';
import {HomeComponentComponent} from './components/home-component/home-component.component';
import {BlogComponent} from './components/blog/blog.component';
import {ContactComponent} from './components/contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/deatil/:id',
    component: BlogItemDetailComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
