import { NgModule } from '@angular/core';

import { UserComponent } from './user/users.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    UserComponent
  ],
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule
  ],
})
export class UsersModule { }
