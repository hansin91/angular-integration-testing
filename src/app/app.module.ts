import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TodoService } from './2-todos/todo.service';

@NgModule({
	declarations: [ AppComponent, NavComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
	providers: [ TodoService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
