import { Routes } from '@angular/router';

// importa as pagina para configuração das rotas
import { Inicio } from './pages/inicio/inicio';
import { Clientes } from './pages/clientes/clientes';
import { Pedidos } from './pages/pedidos/pedidos';
import { Produtos } from './pages/produtos/produtos';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: Inicio
    },
    {
        path: 'clientes',
        component: Clientes
    },
    {
        path: 'pedidos',
        component: Pedidos
    },
    {
        path: 'produtos',
        component: Produtos
    }
];
