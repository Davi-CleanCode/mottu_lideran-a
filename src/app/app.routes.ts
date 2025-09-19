import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AtribComponent } from './atrib/atrib.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { GestaoComponent } from './gestao/gestao.component';
import { InadComponent } from './inad/inad.component';
import { FrotaComponent } from './frota/frota.component';
import { EquipComponent } from './equip/equip.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'atrib', component: AtribComponent },
  { path: 'formacao', component: FormacaoComponent },
  { path: 'gestao', component: GestaoComponent },
  { path: 'inad', component: InadComponent },
  { path: 'frota', component: FrotaComponent },
  { path: 'equip', component: EquipComponent },
  { path: '**', redirectTo: '/home' }
];

