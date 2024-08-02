import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    // {path: '', redirectTo: '/menu', pathMatch: 'full'},
    // {path: 'menu', loadChildren: () => import('./core/layout/menu/menu.module').then(m => m.MenuModule)},
  
    {
        path: '',
        loadChildren: () => import('./core/layout/menu/menu.module')
            .then(m => m.MenuModule)
    },
    {
        path: 'configuracao', children: [
            { path: '', loadChildren: () => import('./pages/configuracao/configuracao.module').then(m => m.ConfiguracaoModule) }
        ]
    },

    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
