import { Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';


import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModel } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [

    /*   ,    { path: '', redirectTo: 'ProductsComponent', pathMatch: 'full' },
    
    
    */
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contactus', component: ContactUsComponent, title: 'contactus' },
    { path: 'product', component: ProductsComponent, title: 'product' },
    { path: '*', component: NotFoundComponent, title: 'not found component' }

];

