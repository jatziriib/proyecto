import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'novelas',
    loadChildren: () => import('./novelas/novelas.module').then( m => m.NovelasPageModule)
  },
  {
    path: 'ficcion',
    loadChildren: () => import('./ficcion/ficcion.module').then( m => m.FiccionPageModule)
  },
  {
    path: 'llorar',
    loadChildren: () => import('./llorar/llorar.module').then( m => m.LlorarPageModule)
  },
  {
    path: 'fantasia',
    loadChildren: () => import('./fantasia/fantasia.module').then( m => m.FantasiaPageModule)
  },
  {
    path: 'infantiles',
    loadChildren: () => import('./infantiles/infantiles.module').then( m => m.InfantilesPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
  },
  {
    path: 'ejemplo',
    loadChildren: () => import('./ejemplo/ejemplo.module').then( m => m.EjemploPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
