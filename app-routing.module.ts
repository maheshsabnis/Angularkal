import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routingapp/components/home/app.home.component';
import { AboutComponent } from './routingapp/components/about/app.about.component';
import { ContactComponent } from './routingapp/components/contact/app.contact.component';
import { ProductFormComponent } from "./components/productformcomponent/app.productform.component";
// route table
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent,
    children: [
      { path: 'product', component: ProductFormComponent }
    ]
  }
];

// the RouterModule.forRoot(routes), will provide the
// router table to to AppModule at Application root

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
