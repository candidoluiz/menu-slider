import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Menu } from "../menu-item/menu";

@Injectable({
    providedIn: 'root'
})
export class NavegacaoService {

    menus: any[] = [];
    menuAsBehaviorSubject: BehaviorSubject<any[]> = null;
    menuAsObservable: Observable<any[]> = null;

    constructor(public menuItems: Menu) {

    }


    private dividirArray(array: any[], size: number) {
        const result: any[][] = [];

        for (let i = 0; i < array.length; i += size) {
            const chunk = array.slice(i, i + size)
            result.push(chunk)
        }
        return result;
    }

    pesquisar(valor) {
        this.atualizarMenu();
        this.menuAsBehaviorSubject.next(
            this.dividirArray(this.menuItems.getAll().filter(f => {
                return f.keywords.filter(k => {
                    return k.toLowerCase().indexOf(valor.toLowerCase()) > -1;
                }).length > 0;
            }), 12)
        );

    }

    private atualizarMenu() {
        if (this.menuAsBehaviorSubject == null) {
            this.menuAsBehaviorSubject = new BehaviorSubject<any[]>(this.menuItems.getAll());
            this.menuAsObservable = this.menuAsBehaviorSubject.asObservable();
        }
    }

}