/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

describe('TodosComponent', () => {
	let component: TodosComponent;
	let fixture: ComponentFixture<TodosComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ HttpClientModule ],
				declarations: [ TodosComponent ],
				providers: [ TodoService ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TodosComponent);
		component = fixture.componentInstance;
	});

	it(
		'should load todos from the server',
		fakeAsync(() => {
			const service = TestBed.get(TodoService);
			// spyOn(service, 'getTodos').and.returnValue(from([ [ 1, 2, 3 ] ]));

			spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([ 1, 2, 3 ]));

			fixture.detectChanges();
			tick();
			expect(component.todos.length).toBe(3);
		})
	);
});
