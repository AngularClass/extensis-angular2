import { NgModule } from '@angular/core';
import { ToDoModule } from './todo/todo.module';
import { MeowModule } from './meow/meow.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    ToDoModule,
    MeowModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent,
    ToDoModule,
    MeowModule
  ]
})
export class AppModule {}
