import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { MapdemoComponent } from './mapdemo/mapdemo.component';



const routes: Routes = [
	{ path: '', component: DemoComponent },
	{ path: 'demo', component: DemoComponent },
	{ path: 'map', component: MapdemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
