import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu-item/menu';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, startWith } from 'rxjs';
import { NavegacaoService } from './navegacao.service';

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

    selectedTabIndex = 0;
    totalRecords = 0;
    menus: any[] = [];
    first: number = 0;
    rows: number = 12;
    pesquisa: FormControl = new FormControl('');

    menuAsBehaviorSubject: BehaviorSubject<any[]> = null;
    menuAsObservable: Observable<any[]> = null;

    constructor(public menuItems: Menu, public navegacaoService: NavegacaoService) {

    }

    ngOnInit(): void {
        this.pesquisarMenu();
    }

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
        this.selectedTabIndex = event.page
    }

    pesquisarMenu() {        
        this.pesquisa.valueChanges
            .pipe(
                startWith(''),
                debounceTime(200),
                distinctUntilChanged()
            ).subscribe(valor => this.navegacaoService.pesquisar(valor))
    }

    // setTokenAutenticacao(autenticacao: Autenticacao) {
    //     this.autenticacaoSingleton = null;
    //     autenticacao.menu = new Menu().menu.filter(m => m.acesso ? autenticacao.permissoes.includes(m.acesso) : m);
    //     this.armazenamento.setItem('auth', autenticacao);
    //     this.autenticacaoChange.next(autenticacao);
    // }

}
