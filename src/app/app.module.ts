import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { EratetypesComponent } from './eratetypes/eratetypes.component';
import { TableModule } from 'primeng/table';
import { ProductService } from './services/productservice';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainHeaderComponent,
    EratetypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
