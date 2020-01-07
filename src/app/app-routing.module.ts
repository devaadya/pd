import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertiesComponent } from './properties/properties.component';
import { LandingComponent } from './landing/landing.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { MoredataComponent } from './moredata/moredata.component';
import { DatatestComponent } from './datatest/datatest.component';
import { EmiComponent } from './emi/emi.component';
import { SmartsearchComponent } from './smartsearch/smartsearch.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: LandingComponent,
    data: { title: 'Home' }
  },
  {
    path: 'filter',
    component: HomeComponent,
    data: { title: 'Filter' }
  },
  { path: 'features', component: FeaturesComponent, data: { title: 'Filter' } },
  {
    path: 'propertylist',
    component: PropertylistComponent,
    data: { title: 'Property List' }
  },
  {
    path: 'properties',
    component: PropertiesComponent,
    data: { title: 'Properties' }
  },
  {
    path: 'emi',
    component: EmiComponent,
    data: { title: 'Calculate Your Emi' }
  },
  {
    path: 'smartsearch',
    component: SmartsearchComponent,
    data: { title: 'Calculate Your Emi' }
  },
  {
    path: 'moredata',
    component: MoredataComponent,
    data: { title: 'more data' }
  },
  {
    path: 'datatest',
    component: DatatestComponent,
    data: { title: 'datatest' }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

export const RoutingComponents = [
   HomeComponent,
  FeaturesComponent,
  PropertiesComponent,
];
