import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { PerfilPesquisaComponent } from './perfil-pesquisa/perfil-pesquisa.component';
import { PerfilRoutingModule } from './perfil.routing';
import { SharedModule } from 'src/app/shared/shard.module';



@NgModule({
    declarations: [
        PerfilFormComponent,
        PerfilPesquisaComponent
    ],
    imports: [
        SharedModule,
        PerfilRoutingModule
    ]
})
export class PerfilModule { }
