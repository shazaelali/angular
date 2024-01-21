// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableDataComponent } from './table-data/table-data.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'table', component: TableDataComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' } // Handle 404 - Redirect to Home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
