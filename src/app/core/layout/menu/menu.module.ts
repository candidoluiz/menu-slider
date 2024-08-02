import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing';
import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from 'src/app/shared/shard.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        MenuRoutingModule,
        PaginatorModule,
        SharedModule,
        MatMenuModule,
        MatButtonModule,
        MatTabsModule
    ]
})
export class MenuModule { }
