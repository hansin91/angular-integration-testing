import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { TodosComponent } from './2-todos/todos.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{
		path: 'users/:id',
		component: UserDetailsComponent
	},
	{
		path: 'users',
		component: UsersComponent
	},
	{
		path: 'todos',
		component: TodosComponent
	},
	{
		path: '',
		component: HomeComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
