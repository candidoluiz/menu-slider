import { NgModule } from '@angular/core';
import { ConfiguracaoRoutingModule } from './configuracao.routing';
import { SharedModule } from 'src/app/shared/shard.module';



@NgModule({
    declarations: [
  ],
    imports: [
        SharedModule,
        ConfiguracaoRoutingModule
    ]
})
export class ConfiguracaoModule { }
