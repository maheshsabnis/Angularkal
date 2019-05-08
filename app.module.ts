import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
import { ProductServiceComponent } from './components/servicecomponents/app.productservice.component';
import { AuthComponent } from './components/authComponent/app.auth.component';
import { DeptComponent } from './components/componentinteraction/app.dept.component';
import { EmpComponent } from './components/componentinteraction/app.emp.component';
import { DeptSenderComponent } from './components/componentinteractionservice/app.deptsender.component';
import { EmpReceiverComponent } from './components/componentinteractionservice/app.empreceiver.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ProductFormComponent,
    ProductServiceComponent,
    AuthComponent,
    DeptComponent,
    EmpComponent,
    DeptSenderComponent,
    EmpReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DeptSenderComponent,
    EmpReceiverComponent]
})
export class AppModule { }
