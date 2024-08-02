import { Injectable } from "@angular/core";

export interface IMenu {
    id: number;
    nome: string;
    link: string;
    icone: string;
    tooltip: string;
    acesso: string;
    keywords: string[];
}

const MENUITEMS: IMenu[]  = [
    {
        id: 1,
        nome: 'Usuário',
        link: 'configuracao/usuario',
        icone: 'user',
        tooltip: 'cadastro de usuario',
        acesso: 'VIZUALIZAR_USUARIO',
        keywords: ['usuario',]
    },
    {
        id: 2,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 3,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 4,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 5,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 1,
        nome: 'Usuário',
        link: 'configuracao/usuario',
        icone: 'user',
        tooltip: 'cadastro de usuario',
        acesso: 'VIZUALIZAR_USUARIO',
        keywords: ['usuario']
    },
    {
        id: 2,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 3,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 4,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 5,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 1,
        nome: 'Usuário',
        link: 'configuracao/usuario',
        icone: 'user',
        tooltip: 'cadastro de usuario',
        acesso: 'VIZUALIZAR_USUARIO',
        keywords: ['usuario']
    },
    {
        id: 2,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 3,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 4,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    },
    {
        id: 5,
        nome: 'Perfil',
        link: 'configuracao/perfil',
        icone: 'user',
        tooltip: 'cadastro de perfil',
        acesso: 'VIZUALIZAR_PERFIL',
        keywords: ['perfil']
    }
];

@Injectable()
export class Menu {

    getAll(): IMenu[] {
        return MENUITEMS;
    }
}