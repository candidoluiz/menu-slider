import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu-item/menu';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    constructor(public menuItems: Menu) {
        

    }

 

    carregar() {
        this.menuItems.getAll();
    }

    title = 'template-android';

    itens:any[] = [];
    
    first: number = 0;

    rows: number = 4;

    ngOnInit(): void {
        this.menu();
        this.carregar();

     }

    menu() {
        for(let i=0; i < 12; i++){
            this.itens.push('teste'+i)
        }
    }

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
    }

}
