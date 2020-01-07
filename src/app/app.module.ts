import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeaturesComponent } from './features/features.component';
import { PropertiesComponent } from './properties/properties.component';
import { LandingComponent } from './landing/landing.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { HttpClientModule } from '@angular/common/http';
// import { SliderModule } from 'ngx-slider';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { RecordfileService } from './recordfile.service';
import { MoredataComponent } from './moredata/moredata.component';
import { DatatestComponent } from './datatest/datatest.component';
import { EmiComponent } from './emi/emi.component';
import { EmicalculateComponent } from './emicalculate/emicalculate.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { SmartsearchComponent } from './smartsearch/smartsearch.component';
import { SsheaderComponent } from './smartsearch/ssheader/ssheader.component';
import { SsbodyComponent } from './smartsearch/ssbody/ssbody.component';
import { SlistComponent } from './propertylist/slist/slist.component';
// import * as rxjs from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    FeaturesComponent,
    PropertiesComponent,
    LandingComponent,
    PropertylistComponent,
    MoredataComponent,
    DatatestComponent,
    EmiComponent,
    HomeloanComponent,
    EmicalculateComponent,
    SmartsearchComponent,
    SsheaderComponent,
    SsbodyComponent,
    SlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatChipsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    OwlModule,
    HttpClientModule,
   // SliderModule,
    ScrollingModule,
    NgbModule
  ],
  providers: [RecordfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
