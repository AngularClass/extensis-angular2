import { NgModule } from '@angular/core';
import { ToDoModule } from './todo/todo.module';
import { MeowModule } from './meow/meow.module';
import { LitterModule } from './litter/litter.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ToDoModule,
    MeowModule,
    LitterModule,
    SharedModule
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
