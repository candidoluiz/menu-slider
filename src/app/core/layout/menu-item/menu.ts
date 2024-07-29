import { Injectable } from "@angular/core";

export interface IMenu {
    id: number;
    nome: string;
    link: string;
    icone: string;
    tooltip: string;
    acesso: string;
}

const MENUITEMS = [
    {
        id: 1,
        nome: 'Usuário',
        link: 'usuario',
        icone: 'user',
        tooltip: 'cadastro de usuario',
        acesso: 'VIZUALIZAR_USUARIO'
    }
];

@Injectable()
export class Menu {
    getAll(): IMenu[] {
        return MENUITEMS;
    }
}