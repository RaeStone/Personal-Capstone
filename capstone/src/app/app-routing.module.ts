import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashAccountComponent } from './components/cash-account/cash-account.component';
import { IRAComponent } from './components/ira/ira.component';

const routes: Routes = [
  { path: "checking", component: CashAccountComponent},
  { path: "ira", component: IRAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
