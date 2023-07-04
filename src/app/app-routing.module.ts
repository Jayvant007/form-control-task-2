import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartAComponent } from './part-a/part-a.component';
import { PartBComponent } from './part-b/part-b.component';

const routes: Routes = [
  {path : 'part-a' , component : PartAComponent},
  {path : 'part-b' , component : PartBComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
