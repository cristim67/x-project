import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardPortfolioComponent } from './card-portfolio/card-portfolio.component';
import { CardAssetsComponent } from './card-assets/card-assets.component';
import { CardSubscriptionsComponent } from './card-subscriptions/card-subscriptions.component';
import { CardStoreComponent } from './card-store/card-store.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { CardActivityComponent } from './card-activity/card-activity.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CardPortfolioComponent,
    CardAssetsComponent,
    CardSubscriptionsComponent,
    CardStoreComponent,
    CardPaymentComponent,
    CardActivityComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    DividerModule,
    AvatarModule,
    TableModule,
    TagModule,
    RippleModule,
    SkeletonModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
