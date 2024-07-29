import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing';
import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from 'src/app/shared/shard.module';


@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        MenuRoutingModule,
        PaginatorModule,
        SharedModule
    ]
})
export class MenuModule { }
