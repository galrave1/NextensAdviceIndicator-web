import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WealthReportComponent } from './Components/wealth-report-component/wealth-report-component';
import { PropertyGrowthReportComponent } from './Components/property-growth-report-component/property-growth-report-component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wealth' },
  { path: 'wealth', component: WealthReportComponent, title: 'Wealth Tax' },
  { path: 'property', component: PropertyGrowthReportComponent, title: 'Property Growth' },
  
  { path: '**', redirectTo: 'wealth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
