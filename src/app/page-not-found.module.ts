import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '**', component: PathNotFoundComponent}
    ])
  ],
  declarations: [ PathNotFoundComponent ],
  exports: [ RouterModule ]
})
export class PageNotFoundModule { }
