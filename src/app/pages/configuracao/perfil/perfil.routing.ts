import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { PerfilPesquisaComponent } from './perfil-pesquisa/perfil-pesquisa.component';

const routes: Routes = [
    {
        path: '', component: PerfilPesquisaComponent,
    },
    {
        path: 'new', component: PerfilFormComponent,
    },
    {
        path: ':id/edit', component: PerfilFormComponent,
    },
];

@NgModule({   
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerfilRoutingModule { }
