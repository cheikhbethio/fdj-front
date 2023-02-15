import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamResolverService } from './team/team-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./league/league.module').then((loadedModule) => loadedModule.LeagueModule)
  },
  {
    path: 'team/:id',
    loadChildren: () => import('./team/team.module').then((loadedModule) => loadedModule.TeamModule),
    resolve: {
      team: TeamResolverService
    }
  },
  {
    path: '*',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
