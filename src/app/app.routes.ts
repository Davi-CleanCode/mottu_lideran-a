import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupruaComponent } from './pages/suprua/suprua.component';
import { GespessoasComponent } from './pages/gespessoas/gespessoas.component';
import { InadComponent } from './pages/inad/inad.component';
import { EquitrabalhoComponent } from './pages/equitrabalho/equitrabalho.component';
import { GesfrotaComponent } from './pages/gesfrota/gesfrota.component';
import { TerceirosComponent } from './pages/terceiros/terceiros.component';
import { AbastecimentoComponent } from './pages/abastecimento/abastecimento.component';
import { PatioComponent } from './pages/patio/patio.component';
import { NomeComponent } from '../pages/nome/nome.component.ts';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'suprua', component: SupruaComponent },
  { path: 'gespessoas', component: GespessoasComponent },
  { path: 'inad', component: InadComponent },
  { path: 'equitrabalho', component: EquitrabalhoComponent },
  { path: 'gesfrota', component: GesfrotaComponent },
  { path: 'terceiros', component: TerceirosComponent },
  { path: 'abastecimento', component: AbastecimentoComponent },
  { path: 'patio', component: PatioComponent },
  { path: 'nome', component: NomeComponent },
  { path: '**', redirectTo: 'home' }
];



