import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback', component: CallbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
